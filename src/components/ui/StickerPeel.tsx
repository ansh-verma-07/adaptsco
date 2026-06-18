import type { ReactNode } from "react";

export function StickerPeel({ children }: { children: ReactNode }) {
  return <div className="relative overflow-hidden rounded-3xl after:absolute after:right-0 after:top-0 after:h-16 after:w-16 after:rounded-bl-3xl after:bg-[var(--accent-soft)]">{children}</div>;
}
