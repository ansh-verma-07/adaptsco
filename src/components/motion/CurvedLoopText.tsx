export function CurvedLoopText({ text }: { text: string }) {
  return (
    <div className="overflow-hidden border-y border-[var(--line)] py-4">
      <div className="animate-marquee whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
        {text} / {text} / {text} / {text} /
      </div>
    </div>
  );
}
