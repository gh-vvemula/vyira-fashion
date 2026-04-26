import Link from "next/link";

import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-shell topbar">
      <Link href="/" className="brand-mark" aria-label="Vyira home">
        <span className="brand-mark__lockup">
          <span className="brand-mark__word">VYI&#x301;RA</span>
          <span className="brand-mark__tag">Legacy. Luxury. Limitless.</span>
        </span>
      </Link>
      <nav className="topnav" aria-label="Primary">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="topbar__actions">
        <a href="#newsletter" className="text-link">
          Join the list
        </a>
      </div>
    </header>
  );
}
