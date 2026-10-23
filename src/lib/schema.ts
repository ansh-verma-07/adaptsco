import { brand } from "../data/brand";
import { siteUrl } from "./constants";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: siteUrl,
  email: brand.contact.email,
  telephone: brand.contact.whatsapp,
  address: brand.contact.address,
  identifier: brand.cin,
  sameAs: [brand.contact.instagramUrl, brand.contact.linkedinUrl, brand.contact.linktreeUrl],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brand.name,
  url: siteUrl,
  description: brand.positioning,
};
