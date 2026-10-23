import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/common/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/common/Container";
import { PageTransition } from "../components/motion/PageTransition";
import { BorderGlowCard } from "../components/ui/BorderGlowCard";
import { projects } from "../data/projects";
import { seo } from "../data/seo";
import { visualFor } from "../data/visuals";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug) || projects[0];
  return (
    <PageTransition>
      <SEO entry={{ ...seo.projects, title: `${project.title} | AdaptSphere`, path: `/projects/${project.slug}` }} />
      <PageHero eyebrow={project.category} title={project.title} text="Editable placeholder case study - replace with real project data, visuals, metrics, and client approvals." />
      <Container className="pb-20">
        <img src={visualFor(project.title)} alt="" className="mb-8 aspect-[16/8] w-full rounded-[2rem] object-cover" />
        <div className="grid gap-5 md:grid-cols-3">
          <BorderGlowCard>
            <h2 className="font-display text-2xl font-semibold">Challenge</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.challenge}</p>
          </BorderGlowCard>
          <BorderGlowCard>
            <h2 className="font-display text-2xl font-semibold">Solution</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.solution}</p>
          </BorderGlowCard>
          <BorderGlowCard>
            <h2 className="font-display text-2xl font-semibold">Result</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.result}</p>
          </BorderGlowCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span key={service} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">
              {service}
            </span>
          ))}
        </div>
        <Link to="/projects" className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black">
          Back to projects
        </Link>
      </Container>
    </PageTransition>
  );
}
