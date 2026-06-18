import { motion } from "framer-motion";

export function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <motion.span key={`${word}-${index}`} aria-hidden initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.045, duration: 0.55 }} className="inline-block pr-[0.22em]">
          {word}
        </motion.span>
      ))}
    </span>
  );
}
