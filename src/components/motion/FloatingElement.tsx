import type { ReactNode } from "react";

export function FloatingElement({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`animate-float ${className || ""}`}>{children}</div>;
}
