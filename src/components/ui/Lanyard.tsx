import logo from "../../assets/brand/logo-adapts.jpeg";

export function Lanyard() {
  return (
    <div className="relative mx-auto h-[420px] max-w-sm">
      <div className="absolute left-1/2 top-0 h-64 w-4 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-glow" />
      <div className="absolute left-1/2 top-40 w-72 -translate-x-1/2 rotate-[-3deg] rounded-[2rem] border border-[var(--line)] bg-[var(--panel-strong)] p-6 shadow-2xl backdrop-blur">
        <img src={logo} alt="ADAPTS logo" className="h-24 w-24 rounded-2xl object-cover" />
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">Identity Card</p>
        <h3 className="mt-2 font-display text-3xl font-semibold">ADAPTS.CO</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Full-stack digital solutions studio. Strategy, design, technology, execution.</p>
      </div>
    </div>
  );
}
