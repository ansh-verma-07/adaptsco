import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65 }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{text}</p> : null}
    </motion.header>
  );
}
