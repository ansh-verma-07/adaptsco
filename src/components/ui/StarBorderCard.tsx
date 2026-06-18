import type { ReactNode } from "react";
import { BorderGlowCard } from "./BorderGlowCard";

export function StarBorderCard({ children }: { children: ReactNode }) {
  return (
    <BorderGlowCard className="before:absolute before:right-5 before:top-5 before:text-[var(--accent)] before:content-['✦']">
      {children}
    </BorderGlowCard>
  );
}
