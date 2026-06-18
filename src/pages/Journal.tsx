import { Link } from "react-router-dom";
import { PageHero } from "../components/common/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/common/Container";
import { PageTransition } from "../components/motion/PageTransition";
import { CurvedLoopText } from "../components/motion/CurvedLoopText";
import { FallingText } from "../components/motion/FallingText";
import { GradualBlur } from "../components/motion/GradualBlur";
import { BorderGlowCard } from "../components/ui/BorderGlowCard";
import { journal } from "../data/journal";
import { seo } from "../data/seo";

export function Journal() {
  return (
    <PageTransition>
      <SEO entry={seo.journal} />
      <PageHero eyebrow="Journal" title="Editorial notes for future-ready brands." text="An innovation blog layout with clearly labeled editable placeholder articles." />
      <CurvedLoopText text="ADAPTS Journal - Build - Design - Secure - Adapt" />
      <Container className="relative py-20">
        <div className="mb-8">
          <FallingText words={["Performance", "Branding", "Cybersecurity", "IoT", "Creative", "Digital products"]} />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {journal.map((post) => (
            <BorderGlowCard key={post.slug}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">{post.category} / {post.readTime}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
              <Link to={`/journal/${post.slug}`} className="mt-5 inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                Read draft
              </Link>
            </BorderGlowCard>
          ))}
        </div>
        <GradualBlur />
      </Container>
    </PageTransition>
  );
}
