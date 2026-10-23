import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/common/PageHero";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/common/Container";
import { PageTransition } from "../components/motion/PageTransition";
import { journal } from "../data/journal";
import { seo } from "../data/seo";

export function JournalDetail() {
  const { slug } = useParams();
  const post = journal.find((item) => item.slug === slug) || journal[0];
  return (
    <PageTransition>
      <SEO entry={{ ...seo.journal, title: `${post.title} | AdaptSphere Journal`, path: `/journal/${post.slug}` }} />
      <PageHero eyebrow={`${post.category} / ${post.readTime}`} title={post.title} text={post.excerpt} />
      <Container className="pb-20">
        <article className="glass mx-auto max-w-3xl rounded-[2rem] p-8 text-lg leading-9 md:p-12">
          <p className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] p-4 text-sm font-semibold">Editable placeholder article - replace with final AdaptSphere journal copy before publishing.</p>
          {post.body.map((paragraph) => (
            <p key={paragraph} className="mb-6 text-[var(--muted)]">
              {paragraph}
            </p>
          ))}
          <Link to="/journal" className="mt-4 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black">
            Back to journal
          </Link>
        </article>
      </Container>
    </PageTransition>
  );
}
