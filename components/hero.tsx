import Link from "next/link";

import { heroMetrics } from "@/data/site";

export function Hero() {
  return (
    <section className="hero site-shell">
      <div className="hero__copy">
        <p className="eyebrow">Vyira / Private Launch</p>
        <div className="hero__brand">
          <p className="hero__brand-mark">VYI&#x301;RA</p>
          <p className="hero__brand-line">Legacy. Luxury. Limitless.</p>
        </div>
        <h1>Luxury western fashion with a timeless black-and-gold point of view.</h1>
        <p className="hero__lede">
          Discover elevated women&apos;s and men&apos;s fashion across dresses, denim, shirts,
          trousers, outerwear, activewear, footwear, bags, and accessories, presented with a more
          refined and premium brand experience.
        </p>
        <div className="hero__actions">
          <Link href="/women" className="button button--primary">
            Shop Women
          </Link>
          <Link href="/men" className="button button--ghost">
            Shop Men
          </Link>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero-card hero-card--tall">
          <span>Midnight tailoring</span>
        </div>
        <div className="hero-card hero-card--wide">
          <span>Gold standard</span>
        </div>
        <div className="hero-stat-grid">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="hero-stat">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
