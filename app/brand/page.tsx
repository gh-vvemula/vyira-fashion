import type { Metadata } from "next";

import { BrandLegacy } from "@/components/brand-legacy";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "Learn about Vyira, founder Vinay Vemula, Padmashali textile heritage, and the brand vision behind premium accessible apparel."
};

export default function BrandPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand"
        title="Legacy, craftsmanship, and a long-term vision for modern apparel."
        description="Discover the founder story, Padmashali textile roots, and the mission behind building Vyira as a premium, accessible, and globally respected apparel label."
      />
      <BrandLegacy />
    </>
  );
}
