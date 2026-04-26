import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-grid";
import { collections, getCollectionBySlug, getProductsForCollection } from "@/data/site";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collection"
    };
  }

  return {
    title: collection.title,
    description: collection.summary,
    openGraph: {
      title: `${collection.title} | Vyira`,
      description: collection.summary
    }
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products = getProductsForCollection(collection.slug);

  return (
    <>
      <PageHero
        eyebrow={collection.eyebrow}
        title={collection.title}
        description={collection.summary}
      />
      <ProductGrid
        title={`${collection.title} edit`}
        subtitle={`${collection.palette} palette with ${collection.highlight.toLowerCase()} pieces.`}
        products={products}
      />
    </>
  );
}
