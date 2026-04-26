import Link from "next/link";

import { type Audience, audienceIntro, getCollectionsByAudience } from "@/data/site";

type CategoryGridProps = {
  audience: Audience;
};

export function CategoryGrid({ audience }: CategoryGridProps) {
  const audienceCollections = getCollectionsByAudience(audience);

  return (
    <section className="site-shell section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{audience}</p>
          <h2>{audience} collections</h2>
        </div>
        <p>{audienceIntro[audience]}</p>
      </div>
      <div className="category-grid">
        {audienceCollections.map((collection) => (
          <Link
            key={collection.slug}
            href={`/collections/${collection.slug}`}
            className="category-card"
          >
            <p className="eyebrow">{collection.highlight}</p>
            <h3>{collection.title}</h3>
            <p>{collection.summary}</p>
            <span>{collection.palette}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
