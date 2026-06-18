export function FallingText({ words }: { words: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word, index) => (
        <span key={word} className="rounded-full border border-[var(--line)] px-3 py-1 text-sm text-[var(--muted)] animate-float" style={{ animationDelay: `${index * 0.18}s` }}>
          {word}
        </span>
      ))}
    </div>
  );
}
