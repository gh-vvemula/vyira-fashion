import Link from "next/link";

export function EditorialBanner() {
  return (
    <section className="site-shell section-space">
      <div className="editorial-banner">
        <div>
          <p className="eyebrow">Why Vyira</p>
          <h2>Focused western apparel with a clean, scalable storefront.</h2>
        </div>
        <p>
          Vyira intentionally focuses on contemporary categories and excludes saree, ethnic, and
          traditional wear, along with shoes, bags, and accessories, to keep the assortment clear
          and consistent.
        </p>
        <Link href="/new-in" className="button button--primary">
          Explore new arrivals
        </Link>
      </div>
    </section>
  );
}
