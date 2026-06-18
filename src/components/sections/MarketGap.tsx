import { brand } from "../../data/brand";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { BorderGlowCard } from "../ui/BorderGlowCard";

export function MarketGap() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader eyebrow="Market gap" title="High-quality digital work should be accessible." text={brand.marketGap} />
        <div className="grid gap-5 md:grid-cols-3">
          {["Sustainable costs", "Enterprise-level quality", "Long-term value"].map((item) => (
            <BorderGlowCard key={item}>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">ADAPTS principle</p>
              <h3 className="mt-4 font-display text-3xl font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Built for growing businesses that need clarity, performance, and reliable execution.</p>
            </BorderGlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
