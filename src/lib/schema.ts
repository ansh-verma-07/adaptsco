import { brand } from "../data/brand";
import { siteUrl } from "./constants";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ADAPTS.CO",
  url: siteUrl,
  email: brand.contact.email,
  sameAs: [brand.contact.instagramUrl, brand.contact.linkedinUrl, brand.contact.linktreeUrl],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ADAPTS.CO",
  url: siteUrl,
  description: brand.positioning,
};
