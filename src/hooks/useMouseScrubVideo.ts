import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useMouseScrubVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const video = ref.current;
    if (!video || reduced) return;
    let previousX = 0;
    const onMove = (event: MouseEvent) => {
      if (window.innerWidth < 1024 || !Number.isFinite(video.duration)) return;
      const delta = event.clientX - previousX;
      previousX = event.clientX;
      const next = Math.max(0, Math.min(video.duration, video.currentTime + (delta / window.innerWidth) * 0.8 * video.duration));
      video.currentTime = next;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  return ref;
}
