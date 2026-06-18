export type ThemeMode = "light" | "dark" | "system";

export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  features: string[];
  visual: string;
  category: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  services: string[];
  visual: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  body: string[];
}

export interface SeoEntry {
  title: string;
  description: string;
  path: string;
}
