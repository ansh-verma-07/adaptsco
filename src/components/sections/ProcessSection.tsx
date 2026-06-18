import { process } from "../../data/process";
import { Container } from "../common/Container";
import { SectionHeader } from "../common/SectionHeader";
import { Stepper } from "../ui/Stepper";

export function ProcessSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader eyebrow="Process" title="Discover, Define, Design, Develop, Deploy, Adapt." />
        <Stepper steps={process} />
      </Container>
    </section>
  );
}
