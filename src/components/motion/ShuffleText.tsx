export function ShuffleText({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{text.split("").reverse().reverse().join("")}</span>;
}
