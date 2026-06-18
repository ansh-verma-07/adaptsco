import { Link } from "react-router-dom";
import { brand } from "../../data/brand";
import { navigation } from "../../data/navigation";
import { Container } from "../common/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-12">
      <Container className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold">ADAPTS.CO</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">{brand.positioning}</p>
        </div>
        <nav className="grid gap-2 text-sm text-[var(--muted)]">
          {navigation.map((item) => (
            <Link key={item.href} to={item.href} className="hover:text-[var(--accent)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm leading-7 text-[var(--muted)]">
          <p>{brand.contact.email}</p>
          <p>{brand.contact.instagram}</p>
          <p>{brand.contact.linkedin}</p>
          <p>{brand.contact.linktree}</p>
        </div>
      </Container>
    </footer>
  );
}
