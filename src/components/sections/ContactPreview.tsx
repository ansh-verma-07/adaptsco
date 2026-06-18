import { Link } from "react-router-dom";
import { Container } from "../common/Container";
import { TextType } from "../motion/TextType";
import { BubbleMenu } from "../ui/BubbleMenu";

export function ContactPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="glass rounded-[2rem] p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-[var(--accent)]">Contact</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            <TextType text="Tell us what you want to build." />
          </h2>
          <div className="mt-8">
            <BubbleMenu items={["Website", "Mobile App", "Branding", "Video", "Merchandise", "IoT", "Cybersecurity", "Other"]} />
          </div>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black">
            Open contact studio
          </Link>
        </div>
      </Container>
    </section>
  );
}
