import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
    (window as unknown as { __adaptsLenis?: Lenis }).__adaptsLenis = lenis;
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete (window as unknown as { __adaptsLenis?: Lenis }).__adaptsLenis;
    };
  }, [reduced]);

  return <>{children}</>;
}
