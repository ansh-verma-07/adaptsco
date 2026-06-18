import type { ReactNode } from "react";

export function CardSwap({ children }: { children: ReactNode }) {
  return <div className="transition duration-300 hover:rotate-1 hover:scale-[1.015]">{children}</div>;
}
