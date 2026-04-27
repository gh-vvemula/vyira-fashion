import Link from "next/link";

export function EditorialBanner() {
  return (
    <section className="site-shell section-space">
      <div className="editorial-banner">
        <div>
          <p className="eyebrow">Why Vyira</p>
          <h2>Design-led apparel with sustainable fabrics and a premium finish.</h2>
        </div>
        <p>
          Vyira focuses on contemporary apparel and natural-feel materials like bamboo, hemp,
          linen, Tencel, and organic cotton so every drop feels breathable, elevated, and easier
          to live in.
        </p>
        <Link href="/new-in" className="button button--primary">
          Explore new arrivals
        </Link>
      </div>
    </section>
  );
}
