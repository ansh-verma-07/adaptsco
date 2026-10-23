import { Link } from "react-router-dom";
import { PageHero } from "../components/common/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/common/Container";
import { PageTransition } from "../components/motion/PageTransition";
import { ImageTrail } from "../components/motion/ImageTrail";
import { ChromaGrid } from "../components/ui/ChromaGrid";
import { FlyingPosters } from "../components/ui/FlyingPosters";
import { StickerPeel } from "../components/ui/StickerPeel";
import { BorderGlowCard } from "../components/ui/BorderGlowCard";
import { projects } from "../data/projects";
import { seo } from "../data/seo";
import { visualFor } from "../data/visuals";

export function Projects() {
  const categories = Array.from(new Set(projects.map((project) => project.category)));
  return (
    <PageTransition>
      <SEO entry={seo.projects} />
      <PageHero eyebrow="Projects" title="Case-study placeholders with cinematic AdaptSphere energy." text="These project cards are clearly marked as editable placeholders until approved project data, metrics, and visuals are provided." />
      <Container className="pb-20">
        <FlyingPosters />
        <div className="my-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">
              {category}
            </span>
          ))}
        </div>
        <ChromaGrid>
          {projects.map((project) => (
            <ImageTrail key={project.slug}>
              <StickerPeel>
                <BorderGlowCard>
                  <img src={visualFor(project.title)} alt="" className="mb-5 aspect-[4/3] w-full rounded-2xl object-cover" />
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">{project.category}</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold">{project.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.challenge}</p>
                  <Link to={`/projects/${project.slug}`} className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                    View Case Study
                  </Link>
                </BorderGlowCard>
              </StickerPeel>
            </ImageTrail>
          ))}
        </ChromaGrid>
      </Container>
    </PageTransition>
  );
}
