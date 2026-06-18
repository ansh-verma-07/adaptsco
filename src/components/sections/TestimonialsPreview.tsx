import { testimonials } from "../../data/testimonials";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { StarBorderCard } from "../ui/StarBorderCard";

export function TestimonialsPreview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader eyebrow="Trust" title="Proof slots ready for verified client voices." text="No fake quotes. The site uses honest placeholders until real testimonials are provided." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <StarBorderCard key={item.role}>
              <p className="text-lg leading-8">{item.label}</p>
              <p className="mt-4 text-sm text-[var(--muted)]">{item.role}</p>
            </StarBorderCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
