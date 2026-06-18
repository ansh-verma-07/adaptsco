import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import type { ThemeMode } from "../../types";
import { cn } from "../../lib/cn";

const options: Array<{ mode: ThemeMode; label: string; icon: typeof Sun }> = [
  { mode: "light", label: "Light theme", icon: Sun },
  { mode: "dark", label: "Dark theme", icon: Moon },
  { mode: "system", label: "System theme", icon: Monitor },
];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();
  return (
    <div className="flex rounded-full border border-[var(--line)] bg-[var(--panel)] p-1" aria-label="Theme mode">
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <button
            key={option.mode}
            type="button"
            aria-label={option.label}
            onClick={() => setMode(option.mode)}
            className={cn("grid h-9 w-9 place-items-center rounded-full text-[var(--muted)] transition", mode === option.mode && "bg-[var(--accent)] text-black")}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}
