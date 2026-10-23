import { brand } from "./brand";

export const contactLinks = [
  { label: "Email", value: brand.contact.email, href: `mailto:${brand.contact.email}` },
  { label: "WhatsApp", value: brand.contact.whatsapp, href: brand.contact.whatsappUrl },
  { label: "Website", value: brand.contact.website, href: brand.contact.website },
  { label: "Instagram", value: brand.contact.instagram, href: brand.contact.instagramUrl },
  { label: "LinkedIn", value: brand.contact.linkedin, href: brand.contact.linkedinUrl },
  { label: "Linktree", value: brand.contact.linktree, href: brand.contact.linktreeUrl },
];

export const projectTypes = ["Website", "Mobile App", "Branding", "Video", "Merchandise", "IoT", "Cybersecurity", "Other"];
export const budgetRanges = ["Starting scope", "Growth project", "Premium build", "Not sure yet"];
export const timelines = ["ASAP", "2-4 weeks", "1-2 months", "Flexible"];
export const contactMethods = ["Email", "Instagram", "LinkedIn"];
