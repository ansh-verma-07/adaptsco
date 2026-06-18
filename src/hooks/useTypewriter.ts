import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useTypewriter(text: string, speed = 38, startDelay = 500) {
  const reduced = usePrefersReducedMotion();
  const [displayed, setDisplayed] = useState(reduced ? text : "");
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setDisplayed(text);
      setDone(true);
      return;
    }
    setDisplayed("");
    setDone(false);
    let index = 0;
    const timeout = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          setDone(true);
          window.clearInterval(interval);
        }
      }, speed);
    }, startDelay);
    return () => window.clearTimeout(timeout);
  }, [reduced, speed, startDelay, text]);

  return { displayed, done };
}
