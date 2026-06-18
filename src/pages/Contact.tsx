import { Check, Copy, ExternalLink, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { PageHero } from "../components/common/PageHero";
import { PricingNote } from "../components/common/PricingNote";
import { SEO } from "../components/common/SEO";
import { Container } from "../components/common/Container";
import { PageTransition } from "../components/motion/PageTransition";
import { TextType } from "../components/motion/TextType";
import { PulseBeams } from "../components/ui/PulseBeams";
import { brand } from "../data/brand";
import { budgetRanges, contactLinks, contactMethods, projectTypes, timelines } from "../data/contact";
import { seo } from "../data/seo";
import { cn } from "../lib/cn";

export function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggle = (item: string) => setSelected((current) => (current.includes(item) ? current.filter((value) => value !== item) : [...current, item]));

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(brand.contact.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <PageTransition>
      <SEO entry={seo.contact} />
      <PageHero eyebrow="Contact" title="Tell us what you want to build." text="We will help you adapt it into reality through strategy, design, technology, and execution." />
      <Container className="pb-20">
        <PulseBeams>
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <aside>
              <h2 className="font-display text-4xl font-semibold leading-tight">
                <TextType text="Tell us what you want to build. We'll help you adapt it into reality." />
              </h2>
              <div className="mt-8 grid gap-3">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--paper)]/50 p-4 text-sm">
                    <span>{link.label}: {link.value}</span>
                    <ExternalLink size={16} />
                  </a>
                ))}
              </div>
              <button type="button" onClick={copyEmail} className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-bold uppercase tracking-[0.18em]">
                {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied" : "Copy email"}
              </button>
              <div className="mt-8">
                <PricingNote />
              </div>
            </aside>
            <form onSubmit={submit} className="grid gap-4 rounded-[2rem] border border-[var(--line)] bg-[var(--paper)]/70 p-5 backdrop-blur md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone / WhatsApp" name="phone" />
                <Field label="Company / Brand" name="company" />
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Project Type
                <select required className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--ink)]">
                  <option value="">Choose project type</option>
                  {projectTypes.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <div>
                <p className="mb-3 text-sm font-semibold">Service selection</p>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((item) => (
                    <button key={item} type="button" onClick={() => toggle(item)} className={cn("rounded-full border px-4 py-2 text-sm transition", selected.includes(item) ? "border-[var(--accent)] bg-[var(--accent)] text-black" : "border-[var(--line)] bg-[var(--panel)] text-[var(--muted)]")}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <Select label="Budget Range" items={budgetRanges} />
                <Select label="Timeline" items={timelines} />
                <Select label="Preferred Contact Method" items={contactMethods} />
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Message
                <textarea required rows={5} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--ink)]" placeholder="Share the scope, idea, target audience, or launch need." />
              </label>
              {submitted ? <p className="rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] p-4 text-sm font-semibold">Request staged successfully. This front-end demo does not send messages yet.</p> : null}
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black">
                Send Project Signal <Send size={16} />
              </button>
            </form>
          </div>
        </PulseBeams>
      </Container>
    </PageTransition>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input name={name} type={type} required={required} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--ink)]" />
    </label>
  );
}

function Select({ label, items }: { label: string; items: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <select className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--ink)]">
        {items.map((item) => <option key={item}>{item}</option>)}
      </select>
    </label>
  );
}
