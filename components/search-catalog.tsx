"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { collections, products } from "@/data/site";

export function SearchCatalog() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const { matchedCollections, matchedProducts } = useMemo(() => {
    if (!query) {
      return { matchedCollections: [], matchedProducts: [] };
    }

    const matchedCollections = collections.filter((collection) =>
      [collection.title, collection.summary, collection.audience, collection.highlight]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );

    const matchedProducts = products.filter((product) =>
      [product.name, product.audience, product.color, product.fit, product.price]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );

    return { matchedCollections, matchedProducts };
  }, [query]);

  return (
    <section className="site-shell section-space">
      <div className="search-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Search</p>
            <h2>Find your Vyira edit.</h2>
          </div>
          <p>
            Search women&apos;s and men&apos;s apparel across dresses, tops, shirts, denim,
            trousers, outerwear, and activewear.
          </p>
        </div>

        {!query ? (
          <div className="search-empty">
            <p>Try searches like `denim`, `women`, `outerwear`, or `shirts`.</p>
            <div className="quick-link-row">
              <Link href="/search?q=women" className="quick-link-pill">
                Women
              </Link>
              <Link href="/search?q=men" className="quick-link-pill">
                Men
              </Link>
              <Link href="/search?q=denim" className="quick-link-pill">
                Denim
              </Link>
              <Link href="/search?q=outerwear" className="quick-link-pill">
                Outerwear
              </Link>
            </div>
          </div>
        ) : (
          <div className="search-results">
            <p className="search-results__summary">
              Results for <strong>{searchParams.get("q")}</strong>
            </p>

            <div className="search-section">
              <h3>Collections</h3>
              <div className="search-grid">
                {matchedCollections.length ? (
                  matchedCollections.map((collection) => (
                    <Link
                      key={collection.slug}
                      href={`/collections/${collection.slug}`}
                      className="search-card"
                    >
                      <p className="eyebrow">{collection.audience}</p>
                      <h4>{collection.title}</h4>
                      <p>{collection.summary}</p>
                    </Link>
                  ))
                ) : (
                  <p className="search-results__empty">No collection match yet.</p>
                )}
              </div>
            </div>

            <div className="search-section">
              <h3>Products</h3>
              <div className="search-grid">
                {matchedProducts.length ? (
                  matchedProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/collections/${product.collectionSlug}`}
                      className="search-card"
                    >
                      <p className="eyebrow">{product.audience}</p>
                      <h4>{product.name}</h4>
                      <p>
                        {product.color} / {product.fit} / {product.price}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="search-results__empty">No product match yet.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
