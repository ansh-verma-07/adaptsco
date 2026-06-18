import { Link } from "react-router-dom";
import { PageHero } from "../components/common/PageHero";
import { PricingNote } from "../components/common/PricingNote";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/common/Container";
import { PageTransition } from "../components/motion/PageTransition";
import { ScrollStack, ScrollStackItem } from "../components/motion/ScrollStack";
import { ChromaGrid } from "../components/ui/ChromaGrid";
import { StarBorderCard } from "../components/ui/StarBorderCard";
import { CardSwap } from "../components/ui/CardSwap";
import { services } from "../data/services";
import { seo } from "../data/seo";
import { visualFor } from "../data/visuals";

export function Services() {
  return (
    <PageTransition>
      <SEO entry={seo.services} />
      <PageHero eyebrow="Services" title="Premium digital solutions for modern brands." text="Web, mobile, branding, creative, merchandise, IoT, and ethical cybersecurity shaped into polished business-ready experiences." />
      <Container className="pb-20">
        <ScrollStack>
          {services.map((service) => (
            <ScrollStackItem key={service.slug}>
              <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
                <img src={visualFor(service.title)} alt="" className="aspect-[4/3] w-full rounded-3xl object-cover" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">{service.eyebrow}</p>
                  <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">{service.title}</h2>
                  <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{service.summary}</p>
                  <ChromaGrid>
                    {service.features.map((feature) => (
                      <CardSwap key={feature}>
                        <StarBorderCard>
                          <p className="text-sm leading-6">{feature}</p>
                        </StarBorderCard>
                      </CardSwap>
                    ))}
                  </ChromaGrid>
                  <div className="mt-6">
                    <PricingNote />
                  </div>
                  <Link to="/contact" className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black">
                    Start this service
                  </Link>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </Container>
    </PageTransition>
  );
}
