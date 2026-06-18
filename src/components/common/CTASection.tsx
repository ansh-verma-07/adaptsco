import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { MagneticButton } from "../motion/MagneticButton";

export function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-14">
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="relative max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[var(--accent)]">Start adapting</p>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Your vision, perfectly built.</h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Tell ADAPTS what you want to build. The next step can be a website, app, brand system, creative campaign, smart prototype, or secure digital foundation.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton as={Link} to="/contact">
                Start a Project <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton as={Link} to="/services" variant="ghost">
                Explore Services
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
