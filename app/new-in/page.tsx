import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ProductGrid } from "@/components/product-grid";
import { getFeaturedProducts } from "@/data/site";

export const metadata: Metadata = {
  title: "New In",
  description: "Explore the latest Vyira apparel arrivals for women and men.",
  openGraph: {
    title: "New In | Vyira",
    description: "Explore the latest Vyira apparel arrivals for women and men."
  }
};

export default function NewInPage() {
  return (
    <>
      <PageHero
        eyebrow="New In"
        title="Fresh arrivals shaped by tailoring, denim, motion, and utility."
        description="A cross-category edit of new silhouettes for women and men, designed for a contemporary wardrobe."
      />
      <ProductGrid
        title="Latest arrivals"
        subtitle="New pieces across womenswear and menswear, selected to launch with clarity and cohesion."
        products={getFeaturedProducts(10)}
      />
    </>
  );
}
