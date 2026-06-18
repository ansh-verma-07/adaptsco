import type { ReactNode } from "react";

export function PulseBeams({ children }: { children?: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8">
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 800 420" fill="none">
        <path d="M60 360V260c0-22 18-40 40-40h190M740 80v100c0 22-18 40-40 40H510M400 50v120M400 250v120" stroke="var(--line)" strokeWidth="2" />
        <path className="animate-pulse" d="M60 360V260c0-22 18-40 40-40h190M740 80v100c0 22-18 40-40 40H510M400 50v120M400 250v120" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="400" cy="210" r="42" fill="var(--accent)" fillOpacity=".18" stroke="var(--accent)" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
