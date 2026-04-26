import Link from "next/link";

import { heroMetrics } from "@/data/site";

export function Hero() {
  return (
    <section className="hero site-shell">
      <div className="hero__copy">
        <p className="eyebrow">Vyira / Spring Capsule</p>
        <h1>Fashion built for modern movement, sharp wardrobes, and everyday confidence.</h1>
        <p className="hero__lede">
          Discover women&apos;s and men&apos;s fashion across dresses, denim, shirts, trousers,
          outerwear, activewear, footwear, bags, and accessories.
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
          <span>Tailored layering</span>
        </div>
        <div className="hero-card hero-card--wide">
          <span>City denim</span>
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
