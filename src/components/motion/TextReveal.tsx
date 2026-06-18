import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function TextReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.span initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className={className}>
      {children}
    </motion.span>
  );
}
