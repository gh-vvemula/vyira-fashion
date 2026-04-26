import type { Metadata } from "next";

import { BrandLegacy } from "@/components/brand-legacy";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "Discover the Vyira founder story, Padmashali textile heritage, and the vision behind a premium, accessible, and sustainable fashion brand."
};

export default function BrandPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand"
        title="Vyira was created to turn heritage into a modern fashion legacy."
        description="Founded by Vinay Vemula, Vyira brings together Padmashali textile roots, 15 years of professional discipline, and a larger mission to build a premium, sustainable, globally respected apparel brand that stays within reach."
      />
      <BrandLegacy />
    </>
  );
}
