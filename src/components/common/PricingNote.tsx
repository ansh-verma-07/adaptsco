import { pricing } from "../../data/pricing";

export function PricingNote({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--accent-soft)] p-4 text-sm leading-6 text-[var(--ink)]">
      <p className={compact ? "" : "font-semibold"}>{pricing.line}</p>
      {!compact ? <p className="mt-1 text-[var(--muted)]">{pricing.scopeLine}</p> : null}
    </div>
  );
}
