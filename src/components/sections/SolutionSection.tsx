import { brand } from "../../data/brand";
import { Container } from "../common/Container";
import { LampSection } from "../ui/LampSection";

export function SolutionSection() {
  return (
    <section className="py-12">
      <Container>
        <LampSection>
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[var(--accent)]">Our solution</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Strategy, design, technology, and execution under one roof.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{brand.positioning}</p>
        </LampSection>
      </Container>
    </section>
  );
}
