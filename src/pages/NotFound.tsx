import { Link } from "react-router-dom";
import { Container } from "../components/common/Container";
import { PageTransition } from "../components/motion/PageTransition";

export function NotFound() {
  return (
    <PageTransition>
      <section className="scanlines grid min-h-screen place-items-center pt-28">
        <Container className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.4em] text-[var(--accent)]">404 / route error</p>
          <h1 className="mt-6 font-display text-7xl font-semibold leading-none md:text-9xl">Signal Lost.</h1>
          <p className="mx-auto mt-6 max-w-xl text-xl text-[var(--muted)]">This route did not adapt.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/" className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black">Back to Home</Link>
            <Link to="/contact" className="rounded-full border border-[var(--line)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em]">Start a Project</Link>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
