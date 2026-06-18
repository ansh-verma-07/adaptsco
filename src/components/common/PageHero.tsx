import { motion } from "framer-motion";
import { Container } from "./Container";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <Container className="relative">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[var(--accent)]">
          {eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="max-w-5xl font-display text-5xl font-semibold leading-none text-balance md:text-7xl lg:text-8xl">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
          {text}
        </motion.p>
      </Container>
    </section>
  );
}
