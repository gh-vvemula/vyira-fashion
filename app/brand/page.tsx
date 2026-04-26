import type { Metadata } from "next";

import { BrandLegacy } from "@/components/brand-legacy";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "Discover the Vyira founder story, Padmashali textile heritage, and the vision behind a premium, accessible, and sustainable fashion brand.",
  alternates: {
    canonical: "https://vyira.com/brand"
  },
  openGraph: {
    title: "Brand Story | Vyira",
    description:
      "Learn how Vyira was founded by Vinay Vemula and inspired by Padmashali textile heritage to build a premium, sustainable fashion brand."
  }
};

export default function BrandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Vyira Brand Story",
            url: "https://vyira.com/brand",
            about: {
              "@type": "Brand",
              name: "Vyira",
              slogan: "Legacy. Luxury. Limitless."
            },
            mainEntity: {
              "@type": "Person",
              name: "Vinay Vemula",
              jobTitle: "Founder",
              worksFor: {
                "@type": "Organization",
                name: "Vyira"
              }
            }
          })
        }}
      />
      <PageHero
        eyebrow="Brand"
        title="Vyira was created to turn heritage into a modern fashion legacy."
        description="Founded by Vinay Vemula, Vyira brings together Padmashali textile roots, 15 years of professional discipline, and a larger mission to build a premium, sustainable, globally respected apparel brand that stays within reach."
      />
      <BrandLegacy />
    </>
  );
}
