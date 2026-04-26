import type { Metadata } from "next";

import { CategoryGrid } from "@/components/category-grid";
import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-grid";
import { getProductsByAudience } from "@/data/site";

export const metadata: Metadata = {
  title: "Men",
  description: "Shop men&apos;s shirts, t-shirts, trousers, denim, outerwear, activewear, footwear, and accessories."
};

export default function MenPage() {
  return (
    <>
      <PageHero
        eyebrow="Men"
        title="Sharp layers and everyday staples with modern restraint."
        description="Discover shirts, t-shirts, trousers, denim, outerwear, activewear, footwear, and accessories designed for repeat wear."
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
