import { seo } from "../data/seo";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/motion/PageTransition";
import { HomeHero } from "../components/sections/HomeHero";
import { MarketGap } from "../components/sections/MarketGap";
import { SolutionSection } from "../components/sections/SolutionSection";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { WhyAdaptsWins } from "../components/sections/WhyAdaptsWins";
import { FeaturedProjects } from "../components/sections/FeaturedProjects";
import { ProcessSection } from "../components/sections/ProcessSection";
import { VisionInnovation } from "../components/sections/VisionInnovation";
import { TestimonialsPreview } from "../components/sections/TestimonialsPreview";
import { ContactPreview } from "../components/sections/ContactPreview";
import { FinalCTA } from "../components/sections/FinalCTA";

export function Home() {
  return (
    <PageTransition>
      <SEO entry={seo.home} />
      <HomeHero />
      <MarketGap />
      <SolutionSection />
      <ServicesPreview />
      <WhyAdaptsWins />
      <FeaturedProjects />
      <ProcessSection />
      <VisionInnovation />
      <TestimonialsPreview />
      <ContactPreview />
      <FinalCTA />
    </PageTransition>
  );
}
