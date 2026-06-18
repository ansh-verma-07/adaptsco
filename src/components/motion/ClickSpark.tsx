import { useState, type ReactNode } from "react";

export function ClickSpark({ children }: { children: ReactNode }) {
  const [sparks, setSparks] = useState<Array<{ id: number; x: number; y: number }>>([]);
  return (
    <div
      className="relative"
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const spark = { id: Date.now(), x: event.clientX - rect.left, y: event.clientY - rect.top };
        setSparks((items) => [...items.slice(-8), spark]);
        window.setTimeout(() => setSparks((items) => items.filter((item) => item.id !== spark.id)), 650);
      }}
    >
      {children}
      {sparks.map((spark) => (
        <span key={spark.id} className="pointer-events-none absolute h-10 w-10 animate-ping rounded-full border border-[var(--accent)]" style={{ left: spark.x - 20, top: spark.y - 20 }} />
      ))}
    </div>
  );
}
