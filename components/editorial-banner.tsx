import Link from "next/link";

export function EditorialBanner() {
  return (
    <section className="site-shell section-space">
      <div className="editorial-banner">
        <div>
          <p className="eyebrow">Brand direction</p>
          <h2>Western fashion only, with a clean product architecture that scales.</h2>
        </div>
        <p>
          Vyira intentionally focuses on contemporary categories and excludes saree, ethnic, and
          traditional wear to keep the assortment clear and consistent.
        </p>
        <Link href="/new-in" className="button button--primary">
          Explore the latest edit
        </Link>
      </div>
    </section>
  );
}
