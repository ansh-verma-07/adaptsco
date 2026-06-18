import type { ReactNode } from "react";

export function LampSection({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#050604] p-8 text-white md:p-14">
      <div className="absolute left-1/2 top-0 h-1 w-80 -translate-x-1/2 bg-[var(--accent)] shadow-glow" />
      <div className="absolute left-1/2 top-0 h-52 w-[42rem] -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl" />
      <div className="relative">{children}</div>
    </div>
  );
}
