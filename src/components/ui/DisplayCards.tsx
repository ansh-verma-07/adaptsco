import type { ReactNode } from "react";

export function DisplayCards({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-3">{children}</div>;
}
