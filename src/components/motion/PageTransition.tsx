import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { pageTransition } from "../../lib/animations";

export function PageTransition({ children }: { children: ReactNode }) {
  return <motion.main {...pageTransition}>{children}</motion.main>;
}
