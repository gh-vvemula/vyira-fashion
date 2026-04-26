import Image from "next/image";
import Link from "next/link";

import { collections, type Product } from "@/data/site";

type ProductGridProps = {
  title: string;
  subtitle: string;
  products: Product[];
};

const productVisuals = [
  "/brand/product-signature-1.svg",
  "/brand/product-signature-2.svg",
  "/brand/product-signature-3.svg",
  "/brand/product-signature-4.svg"
];

export function ProductGrid({ title, subtitle, products }: ProductGridProps) {
  return (
    <section className="site-shell section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Featured</p>
          <h2>{title}</h2>
        </div>
        <p>{subtitle}</p>
      </div>
      <div className="product-grid">
        {products.map((product, index) => {
          const collection = collections.find((entry) => entry.slug === product.collectionSlug);

          return (
            <article key={product.id} className="product-card">
              <div className={`product-card__visual product-card__visual--${(index % 4) + 1}`}>
                <Image
                  src={productVisuals[index % productVisuals.length]}
                  alt=""
                  className="product-card__image"
                  fill
                  sizes="(max-width: 1080px) 50vw, 25vw"
                />
                {product.badge ? <span className="product-badge">{product.badge}</span> : null}
              </div>
              <div className="product-card__body">
                <div>
                  <p className="eyebrow">{collection?.title ?? product.audience}</p>
                  <h3>{product.name}</h3>
                </div>
                <p className="product-meta">
                  {product.audience} / {product.color} / {product.fit}
                </p>
                <div className="product-card__footer">
                  <strong>{product.price}</strong>
                  <Link href={`/collections/${product.collectionSlug}`}>Shop</Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
