import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % words.length), 1800);
    return () => window.clearInterval(timer);
  }, [words.length]);
  return (
    <motion.span key={words[index]} initial={{ opacity: 0.55, y: 6 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-[var(--accent)]">
      {words[index]}
    </motion.span>
  );
}
