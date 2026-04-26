import type { Metadata } from "next";

import { ContactCta } from "@/components/contact-cta";
import { CategoryGrid } from "@/components/category-grid";
import { EditorialBanner } from "@/components/editorial-banner";
import { EnquiryForm } from "@/components/enquiry-form";
import { Hero } from "@/components/hero";
import { HomeStories } from "@/components/home-stories";
import { Newsletter } from "@/components/newsletter";
import { ProductGrid } from "@/components/product-grid";
import { getFeaturedProducts } from "@/data/site";

export const metadata: Metadata = {
  title: "Vyira Fashion",
  description:
    "Explore Vyira, a premium fashion brand for women and men featuring dresses, tops, denim, trousers, outerwear, and activewear shaped by heritage and modern style.",
  openGraph: {
    title: "Vyira | Premium Fashion Brand for Women and Men",
    description:
      "Explore dresses, tops, denim, trousers, outerwear, and activewear at Vyira, a premium brand built on heritage, modern style, and accessible luxury."
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyira | Premium Fashion Brand for Women and Men",
    description:
      "Vyira brings together heritage, premium design, and modern apparel for women and men."
  }
};

export default function HomePage() {
  return (
    <>
      <ContactCta />
      <Hero />
      <HomeStories />
      <CategoryGrid audience="Women" />
      <CategoryGrid audience="Men" />
      <EditorialBanner />
      <ProductGrid
        title="Apparel highlights"
        subtitle="A launch assortment built around dresses, tailoring, denim, outerwear, and active motion essentials."
        products={getFeaturedProducts()}
      />
      <EnquiryForm />
      <Newsletter />
    </>
  );
}
