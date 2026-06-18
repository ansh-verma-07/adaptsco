import { useEffect } from "react";
import type { SeoEntry } from "../../types";
import { siteUrl } from "../../lib/constants";
import { organizationSchema, websiteSchema } from "../../lib/schema";

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

export function SEO({ entry, schema }: { entry: SeoEntry; schema?: object }) {
  useEffect(() => {
    const url = `${siteUrl}${entry.path}`;
    document.title = entry.title;
    setMeta("description", entry.description);
    setMeta("og:title", entry.title, true);
    setMeta("og:description", entry.description, true);
    setMeta("og:url", url, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", entry.title);
    setMeta("twitter:description", entry.description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    const id = "adapts-json-ld";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema || [organizationSchema, websiteSchema]);
    document.head.appendChild(script);
  }, [entry, schema]);

  return null;
}
