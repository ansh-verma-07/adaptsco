import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 24 });
  return <motion.div aria-hidden className="fixed left-0 top-0 z-[80] h-1 origin-left bg-[var(--accent)]" style={{ scaleX, width: "100%" }} />;
}
