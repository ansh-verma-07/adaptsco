import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { visualFor } from "../../data/visuals";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { ChromaGrid } from "../ui/ChromaGrid";
import { BorderGlowCard } from "../ui/BorderGlowCard";

export function ServicesPreview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader eyebrow="Services" title="Digital systems, creative momentum, secure foundations." text="Every service is designed as a premium product surface: useful, polished, and aligned with business need." />
        <ChromaGrid>
          {services.slice(0, 6).map((service) => (
            <BorderGlowCard key={service.slug}>
              <img src={visualFor(service.title)} alt="" className="mb-5 aspect-[4/3] w-full rounded-2xl object-cover" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">{service.category}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.summary}</p>
            </BorderGlowCard>
          ))}
        </ChromaGrid>
        <Link to="/services" className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black">
          Explore all services
        </Link>
      </Container>
    </section>
  );
}
