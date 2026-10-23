import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/brand/logo-adapts.jpeg";
import { brand } from "../../data/brand";
import { services } from "../../data/services";
import { Container } from "../common/Container";
import { DecryptedText } from "../motion/DecryptedText";
import { MagneticButton } from "../motion/MagneticButton";
import { RotatingText } from "../motion/RotatingText";
import { SplitText } from "../motion/SplitText";
import { HeroCanvas } from "../3d/HeroCanvas";

export function HomeHero() {
  const ticker = services.map((service) => service.category).join(" / ");
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 dot-grid opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,var(--accent-soft),transparent_30rem)]" />
      <HeroCanvas />
      <Container className="relative z-10 flex min-h-[calc(100vh-7rem)] flex-col justify-end pb-14 md:justify-center md:pb-0">
        <div className="min-w-0 max-w-5xl">
          <div className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--muted)] backdrop-blur">
            <img src={logo} alt="" className="h-7 w-7 shrink-0 rounded-full object-cover" />
            <DecryptedText text="Engineered for the Future" />
          </div>
          <h1 className="font-display text-[clamp(2rem,12vw,3.75rem)] font-semibold leading-[0.86] tracking-tight text-balance md:text-8xl lg:text-[8.5rem]">
            <SplitText text={brand.shortName} className="[&>span]:pr-0" />
          </h1>
          <p className="mt-7 max-w-3xl text-2xl leading-tight text-[var(--ink)] md:text-4xl">
            {brand.taglines[0]}. <span className="text-[var(--muted)]">Premium digital solutions for </span>
            <RotatingText words={["modern brands.", "visionary teams.", "future builders."]} />
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">Web / Mobile / Branding / Creative / Cybersecurity / IoT</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <MagneticButton as={Link} to="/contact">
              Start a Project <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton as={Link} to="/services" variant="ghost">
              Explore Services <Sparkles size={18} />
            </MagneticButton>
            <MagneticButton as={Link} to="/projects" variant="ghost">
              View Work <Play size={18} />
            </MagneticButton>
          </div>
        </div>
      </Container>
      <div className="relative z-10 overflow-hidden border-y border-[var(--line)] bg-[var(--panel)] py-4 backdrop-blur">
        <div className="animate-marquee w-max whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
          {ticker} / {ticker} / {ticker} / {ticker} /
        </div>
      </div>
    </section>
  );
}
