import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { visualFor } from "../../data/visuals";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { CardSwap } from "../ui/CardSwap";
import { BorderGlowCard } from "../ui/BorderGlowCard";

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader eyebrow="Featured placeholders" title="Cinematic case-study frames ready for real project data." />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <CardSwap key={project.slug}>
              <BorderGlowCard>
                <img src={visualFor(project.title)} alt="" className="mb-5 aspect-[4/3] w-full rounded-2xl object-cover" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">{project.category}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.challenge}</p>
                <Link to={`/projects/${project.slug}`} className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                  View case study
                </Link>
              </BorderGlowCard>
            </CardSwap>
          ))}
        </div>
      </Container>
    </section>
  );
}
