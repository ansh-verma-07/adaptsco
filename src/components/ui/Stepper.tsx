export function Stepper({ steps }: { steps: Array<{ step: string; text: string }> }) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((item, index) => (
        <li key={item.step} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-5">
          <span className="text-xs font-bold text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 font-display text-2xl font-semibold">{item.step}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
