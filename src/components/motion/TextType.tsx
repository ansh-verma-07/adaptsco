import { useTypewriter } from "../../hooks/useTypewriter";

export function TextType({ text, className }: { text: string; className?: string }) {
  const { displayed, done } = useTypewriter(text);
  return (
    <span className={className}>
      {displayed}
      {!done ? <span className="ml-1 inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-[var(--accent)]" /> : null}
    </span>
  );
}
