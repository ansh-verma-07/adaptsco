import logo from "../../assets/brand/logo-adapts.jpeg";

export function LogoLoop() {
  return (
    <div className="overflow-hidden border-y border-[var(--line)] py-4">
      <div className="animate-marquee flex w-max items-center gap-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em]">
            <img src={logo} alt="" className="h-8 w-8 rounded-full object-cover" />
            ADAPTS.CO
          </div>
        ))}
      </div>
    </div>
  );
}
