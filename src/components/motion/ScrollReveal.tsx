import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../../lib/animations";

export function ScrollReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div {...fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
