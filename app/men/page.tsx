import type { Metadata } from "next";

import { CategoryGrid } from "@/components/category-grid";
import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-grid";
import { getProductsByAudience } from "@/data/site";

export const metadata: Metadata = {
  title: "Men",
  description: "Shop men's shirts, t-shirts, trousers, denim, outerwear, and activewear at Vyira.",
  openGraph: {
    title: "Men's Apparel | Vyira",
    description: "Shop men's shirts, t-shirts, trousers, denim, outerwear, and activewear at Vyira."
  }
};

export default function MenPage() {
  return (
    <>
      <PageHero
        eyebrow="Men"
        title="Sharp layers and everyday staples with modern restraint."
        description="Discover shirts, t-shirts, trousers, denim, outerwear, and activewear designed for repeat wear."
      />
      <CategoryGrid audience="Men" />
      <ProductGrid
        title="Men&apos;s latest picks"
        subtitle="Minimal essentials, clean tailoring, and technical pieces designed to move between settings."
        products={getProductsByAudience("Men")}
      />
    </>
  );
}
