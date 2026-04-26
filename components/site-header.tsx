import Link from "next/link";

import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <>
      <div className="utility-bar">
        <div className="site-shell utility-bar__inner">
          <span>India</span>
          <div className="utility-links">
            <a href="tel:+919030000876">Call: +91 90300 00876</a>
            <span aria-hidden="true">|</span>
            <a
              href="https://wa.me/919030000876?text=Hi%20Vyira%2C%20I%20want%20to%20shop%20your%20apparel%20collection."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <span aria-hidden="true">|</span>
            <a href="#newsletter">Join Vyira</a>
            <span aria-hidden="true">|</span>
            <Link href="/new-in">New arrivals</Link>
          </div>
        </div>
      </div>
      <header className="site-shell topbar">
        <Link href="/" className="brand-mark" aria-label="Vyira home">
          <span className="brand-mark__word">VYI&#x301;RA</span>
        </Link>
        <nav className="topnav" aria-label="Primary">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="topbar__actions">
          <Link href="/new-in" className="text-link">
            Shop All
          </Link>
        </div>
      </header>
      <div className="promo-strip">
        <div className="site-shell promo-strip__inner">
          <strong>Apparel only</strong>
          <span>Dresses, tops, denim, shirts, trousers, outerwear, and activewear.</span>
        </div>
      </div>
    </>
  );
}
