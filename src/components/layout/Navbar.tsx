import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/brand/logo-adapts.jpeg";
import { navigation } from "../../data/navigation";
import { cn } from "../../lib/cn";
import { ThemeToggle } from "../ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2 shadow-2xl backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-3 rounded-full pr-3">
            <img src={logo} alt="ADAPTS logo" className="h-11 w-11 rounded-full object-cover" />
            <span className="hidden font-display text-sm font-bold uppercase tracking-[0.24em] sm:inline">ADAPTS.CO</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navigation.slice(1).map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => cn("rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)] transition hover:text-[var(--ink)]", isActive && "bg-[var(--accent-soft)] text-[var(--ink)]")}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] md:hidden" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
