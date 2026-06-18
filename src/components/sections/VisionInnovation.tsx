import { brand } from "../../data/brand";
import { Container } from "../common/Container";
import { VariableProximityText } from "../motion/VariableProximityText";
import { FallingText } from "../motion/FallingText";

export function VisionInnovation() {
  return (
    <section className="py-20">
      <Container className="grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-center">
        <VariableProximityText text="Creativity powered by technology. Transforming ideas into reality. Building for tomorrow." />
        <FallingText words={brand.personality} />
      </Container>
    </section>
  );
}
