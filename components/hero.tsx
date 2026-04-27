import Link from "next/link";

import { heroMetrics } from "@/data/site";

export function Hero() {
  return (
    <section className="hero site-shell">
      <div className="hero__copy">
        <p className="eyebrow">Just in</p>
        <p className="hero__tagline">Elegance by nature.</p>
        <h1>Elegance made effortless for the way your collection should feel.</h1>
        <p className="hero__lede">
          Design-led apparel for women and men, shaped with premium finish, soft structure, and
          fabrics chosen for comfort on the body, from bamboo and hemp to linen, Tencel, and
          organic cotton.
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
          <strong>Designed to feel lighter</strong>
          <span>Easy silhouettes with a premium hand-feel, clean drape, and everyday polish.</span>
        </div>
        <div className="hero-panel hero-panel--secondary">
          <span className="hero-panel__eyebrow">Fabric focus</span>
          <strong>Soft-touch essentials</strong>
          <span>Breathable blends built to feel smooth, skin-friendly, and effortless to wear.</span>
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
