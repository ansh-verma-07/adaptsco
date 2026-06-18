import type { ReactNode } from "react";

export function ScrollStack({ children }: { children: ReactNode }) {
  return <div className="space-y-6 md:space-y-8">{children}</div>;
}

export function ScrollStackItem({ children }: { children: ReactNode }) {
  return <div className="sticky top-24 rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel-strong)] p-6 shadow-2xl backdrop-blur md:p-8">{children}</div>;
}
