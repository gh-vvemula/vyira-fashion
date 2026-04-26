import { ContactCta } from "@/components/contact-cta";
import { CategoryGrid } from "@/components/category-grid";
import { EditorialBanner } from "@/components/editorial-banner";
import { EnquiryForm } from "@/components/enquiry-form";
import { Hero } from "@/components/hero";
import { HomeStories } from "@/components/home-stories";
import { Newsletter } from "@/components/newsletter";
import { ProductGrid } from "@/components/product-grid";
import { getFeaturedProducts } from "@/data/site";

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
