import { PageHero } from "../components/common/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/common/Container";
import { PageTransition } from "../components/motion/PageTransition";
import { LogoLoop } from "../components/motion/LogoLoop";
import { DisplayCards } from "../components/ui/DisplayCards";
import { StarBorderCard } from "../components/ui/StarBorderCard";
import { BorderGlowCard } from "../components/ui/BorderGlowCard";
import { seo } from "../data/seo";
import { testimonials, trustPillars } from "../data/testimonials";

export function Testimonials() {
  return (
    <PageTransition>
      <SEO entry={seo.testimonials} />
      <PageHero eyebrow="Testimonials" title="Honest proof architecture, ready for real client words." text="No fake client testimonials are used. These slots stay visibly labeled until verified quotes are available." />
      <LogoLoop />
      <Container className="py-20">
        <DisplayCards>
          {testimonials.map((item) => (
            <StarBorderCard key={item.role}>
              <p className="text-xl leading-8">{item.label}</p>
              <p className="mt-5 text-sm text-[var(--muted)]">{item.role}</p>
            </StarBorderCard>
          ))}
        </DisplayCards>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {trustPillars.map((pillar) => (
            <BorderGlowCard key={pillar}>
              <h2 className="font-display text-3xl font-semibold">{pillar}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">A trust signal from ADAPTS' positioning: quality, efficiency, scalability, and sustainable cost awareness.</p>
            </BorderGlowCard>
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
