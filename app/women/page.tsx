import type { Metadata } from "next";

import { CategoryGrid } from "@/components/category-grid";
import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-grid";
import { getProductsByAudience } from "@/data/site";

export const metadata: Metadata = {
  title: "Women",
  description: "Shop women&apos;s dresses, tops, denim, outerwear, activewear, footwear, and bags."
};

export default function WomenPage() {
  return (
    <>
      <PageHero
        eyebrow="Women"
        title="Elevated essentials for work, weekends, and after-hours."
        description="Explore dresses, tops, denim, outerwear, activewear, footwear, and bags with a confident, contemporary point of view."
      />
      <CategoryGrid audience="Women" />
      <ProductGrid
        title="Women&apos;s bestsellers"
        subtitle="A balanced mix of polished tailoring, soft structure, and easy performance pieces."
        products={getProductsByAudience("Women")}
      />
    </>
  );
}
