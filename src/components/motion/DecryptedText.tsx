import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const chars = "ADAPTS0123456789<>/{}";

export function DecryptedText({ text, className }: { text: string; className?: string }) {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(reduced ? text : "");

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    let step = 0;
    import("animejs").then((mod) => {
      const animate = (mod as unknown as { animate?: unknown }).animate;
      void animate;
    });
    const run = () => {
      step += 1;
      setValue(
        text
          .split("")
          .map((letter, index) => (index < step / 2 || letter === " " ? letter : chars[Math.floor(Math.random() * chars.length)]))
          .join(""),
      );
      if (step / 2 < text.length) frame = requestAnimationFrame(run);
    };
    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, [reduced, text]);

  return <span className={className}>{value}</span>;
}
