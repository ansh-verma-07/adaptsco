import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { PulseBeams } from "../ui/PulseBeams";

export function WhyAdaptsWins() {
  return (
    <section className="py-20">
      <Container>
        <PulseBeams>
          <SectionHeader eyebrow="Why AdaptSphere wins" title="Refined design thinking meets reliable high-performance engineering." text="Purposeful creative storytelling, cost-conscious scalability, and long-term value make AdaptSphere a focused partner for modern brands." />
          <div className="grid gap-4 md:grid-cols-4">
            {["Premium", "Adaptive", "Reliable", "Visionary"].map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--paper)]/50 p-5">
                <p className="font-display text-2xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </PulseBeams>
      </Container>
    </section>
  );
}
