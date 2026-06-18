import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function BorderGlowCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("group relative overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel)] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]", className)}>
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition group-hover:opacity-100" />
      {children}
    </div>
  );
}
