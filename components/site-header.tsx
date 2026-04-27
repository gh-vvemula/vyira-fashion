import Link from "next/link";

import { navigation } from "@/data/site";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.9" />
      <path d="M16.5 16.5L21 21" fill="none" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.2 4.8 13.3A4.9 4.9 0 0 1 12 6.8a4.9 4.9 0 0 1 7.2 6.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 8h12l-.8 11.2A2 2 0 0 1 15.2 21H8.8a2 2 0 0 1-2-1.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V7.5a3 3 0 0 1 6 0V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <div className="site-shell utility-bar__inner">
          <span>India</span>
          <div className="utility-links">
            <Link href="/help">Help</Link>
            <span aria-hidden="true">|</span>
            <Link href="/account/sign-up">Sign Up</Link>
            <span aria-hidden="true">|</span>
            <Link href="/account/login">Log In</Link>
          </div>
        </div>
      </div>
      <header className="site-shell topbar">
        <Link href="/" className="brand-mark" aria-label="Vyira home">
          <span className="brand-mark__lockup">
            <span className="brand-mark__word">VYI&#x301;RA</span>
            <span className="brand-mark__tagline">Elegance Made Effortless</span>
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
          <form action="/search" className="search-bar" role="search">
            <SearchIcon />
            <input type="search" name="q" placeholder="Search" aria-label="Search Vyira" />
          </form>
          <Link href="/account/login" className="icon-link" aria-label="Liked items">
            <HeartIcon />
          </Link>
          <Link href="/cart" className="icon-link" aria-label="Cart">
            <BagIcon />
          </Link>
        </div>
      </header>
      <div className="promo-strip">
        <div className="site-shell promo-strip__inner">
          <strong>Premium natural blends</strong>
          <span>Bamboo, hemp, linen, Tencel, and organic cotton with a refined finish.</span>
        </div>
      </div>
    </>
  );
}
