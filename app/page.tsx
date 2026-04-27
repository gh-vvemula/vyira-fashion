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
  title: {
    absolute: "VYÍRA"
  },
  description:
    "Explore Vyira, a design-led fashion brand for women and men featuring dresses, tops, denim, trousers, outerwear, and activewear shaped by effortless elegance and sustainable premium fabrics.",
  openGraph: {
    title: "VYÍRA | Elegance by nature",
    description:
      "Explore dresses, tops, denim, trousers, outerwear, and activewear at Vyira, a design-led brand built on heritage, premium finish, and sustainable fabrics."
  },
  twitter: {
    card: "summary_large_image",
    title: "VYÍRA | Elegance by nature",
    description:
      "Vyira brings together heritage, design-led apparel, and natural-feel fabrics for women and men."
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
        subtitle="A launch assortment built around dresses, tailoring, denim, outerwear, and comfort-led essentials with a premium finish."
        products={getFeaturedProducts()}
      />
      <EnquiryForm />
      <Newsletter />
    </>
  );
}
