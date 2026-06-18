import { useEffect, useState } from "react";
import type { ThemeMode } from "../types";

const storageKey = "adapts-theme";

function resolveTheme(mode: ThemeMode) {
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode;
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => (localStorage.getItem(storageKey) as ThemeMode) || "system");

  useEffect(() => {
    const apply = () => {
      document.documentElement.dataset.theme = resolveTheme(mode);
      document.documentElement.dataset.themeMode = mode;
      localStorage.setItem(storageKey, mode);
    };
    apply();
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, [mode]);

  return { mode, setMode };
}
