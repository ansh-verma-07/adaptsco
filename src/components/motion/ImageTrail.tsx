import type { ReactNode } from "react";

export function ImageTrail({ children }: { children: ReactNode }) {
  return <div className="relative transition duration-300 hover:scale-[1.015]">{children}</div>;
}
