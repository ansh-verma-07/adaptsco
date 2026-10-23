import { PageHero } from "../components/common/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/common/Container";
import { SectionHeader } from "../components/common/SectionHeader";
import { PageTransition } from "../components/motion/PageTransition";
import { LogoLoop } from "../components/motion/LogoLoop";
import { ScrollFloat } from "../components/motion/ScrollFloat";
import { VariableProximityText } from "../components/motion/VariableProximityText";
import { DisplayCards } from "../components/ui/DisplayCards";
import { Lanyard } from "../components/ui/Lanyard";
import { BorderGlowCard } from "../components/ui/BorderGlowCard";
import { brand } from "../data/brand";
import { process } from "../data/process";
import { seo } from "../data/seo";

export function About() {
  return (
    <PageTransition>
      <SEO entry={seo.about} />
      <PageHero eyebrow="About" title="A digital solutions studio thoughtfully crafted for premium brands." text="Built by designers, developers, and strategic thinkers. Guided by clarity, balance, and long-term vision." />
      <section className="py-12">
        <Container className="grid gap-10 md:grid-cols-[1fr_.8fr] md:items-center">
          <div>
            <VariableProximityText text="We design and build digital experiences that scale with businesses and perform reliably in real-world environments." />
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{brand.positioning}</p>
          </div>
          <ScrollFloat>
            <Lanyard />
          </ScrollFloat>
        </Container>
      </section>
      <LogoLoop />
      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Manifesto" title="Creativity powered by technology." text="Transforming ideas into reality. Building for tomorrow. Delivering digital experiences with precision, performance, and brand-specific clarity." />
          <DisplayCards>
            {["Strategy", "Design", "Technology"].map((item, index) => (
              <BorderGlowCard key={item}>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">0{index + 1}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">A core layer of the AdaptSphere operating system for modern brands.</p>
              </BorderGlowCard>
            ))}
          </DisplayCards>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeader eyebrow="Timeline" title="A clear path from concept to adaptation." />
          <div className="grid gap-4 md:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5">
                <h3 className="font-display text-2xl font-semibold">{item.step}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
