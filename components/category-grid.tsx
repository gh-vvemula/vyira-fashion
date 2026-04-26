import Image from "next/image";
import Link from "next/link";

import { type Audience, audienceIntro, getCollectionsByAudience } from "@/data/site";

type CategoryGridProps = {
  audience: Audience;
};

const collectionVisuals: Record<string, string> = {
  "women-dresses": "/brand/edit-women.svg",
  "women-tops": "/brand/edit-women.svg",
  "women-denim": "/brand/edit-women.svg",
  "women-outerwear": "/brand/edit-women.svg",
  "women-activewear": "/brand/edit-women.svg",
  "men-shirts": "/brand/edit-men.svg",
  "men-tshirts": "/brand/edit-men.svg",
  "men-trousers": "/brand/edit-men.svg",
  "men-denim": "/brand/edit-men.svg",
  "men-outerwear": "/brand/edit-men.svg",
  "men-activewear": "/brand/edit-men.svg"
};

export function CategoryGrid({ audience }: CategoryGridProps) {
  const audienceCollections = getCollectionsByAudience(audience);

  return (
    <section className="site-shell section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{audience}</p>
          <h2>Shop {audience.toLowerCase()}</h2>
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
            <div className="category-card__media">
              <Image
                src={collectionVisuals[collection.slug]}
                alt=""
                className="category-card__image"
                width={560}
                height={420}
              />
            </div>
            <p className="eyebrow">{collection.highlight}</p>
            <h3>{collection.title}</h3>
            <p>{collection.summary}</p>
            <span>Shop now</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
