import { Link } from "react-router-dom";
import { navigation } from "../../data/navigation";
import { cn } from "../../lib/cn";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={cn("fixed inset-0 z-40 bg-[var(--paper)]/96 px-6 pt-28 backdrop-blur-xl transition md:hidden", open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")}>
      <nav className="grid gap-4">
        {navigation.map((item) => (
          <Link key={item.href} to={item.href} onClick={onClose} className="border-b border-[var(--line)] py-4 font-display text-4xl font-semibold">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
