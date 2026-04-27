import type { Metadata } from "next";

import { BrandLegacy } from "@/components/brand-legacy";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "Discover the Vyira founder story, Telugu Padmashali textile heritage, and the design-led vision behind elegance, premium finish, and sustainable fabrics.",
  alternates: {
    canonical: "https://vyira.com/brand"
  },
  openGraph: {
    title: "Brand Story | Vyira",
    description:
      "Learn how Vyira was founded by Vinay Vemula and inspired by Telugu Padmashali textile heritage to build a design-led, sustainable apparel brand."
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
              slogan: "elegance by nature"
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
        title="Vyira is a modern brand shaped by Telugu Padmashali roots."
        description="Founded by Vinay Vemula, Vyira brings together traditional respect for fabric, clean design, soft comfort, and thoughtful materials with a premium finish."
      />
      <BrandLegacy />
    </>
  );
}
