import Link from "next/link";

import { heroMetrics } from "@/data/site";

export function Hero() {
  return (
    <section className="hero site-shell">
      <div className="hero__copy">
        <p className="eyebrow">Just in</p>
        <h1>New-season staples for women and men.</h1>
        <p className="hero__lede">
          Discover clean western fashion across dresses, tops, denim, shirts, trousers,
          outerwear, activewear, footwear, bags, and accessories built for daily wear.
        </p>
        <div className="hero__actions">
          <Link href="/new-in" className="button button--primary">
            Shop New Arrivals
          </Link>
          <Link href="/women" className="button button--ghost">
            Women
          </Link>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero-panel hero-panel--feature">
          <span className="hero-panel__eyebrow">Featured drop</span>
          <strong>Tailored layers</strong>
          <span>Sharp silhouettes in neutral palettes.</span>
        </div>
        <div className="hero-panel hero-panel--secondary">
          <span className="hero-panel__eyebrow">Trending now</span>
          <strong>City denim</strong>
          <span>Easy fits for weekday to weekend dressing.</span>
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
