import { CategoryGrid } from "@/components/category-grid";
import { EditorialBanner } from "@/components/editorial-banner";
import { Hero } from "@/components/hero";
import { HomeStories } from "@/components/home-stories";
import { Newsletter } from "@/components/newsletter";
import { ProductGrid } from "@/components/product-grid";
import { getFeaturedProducts } from "@/data/site";

export default function HomePage() {
  return (
    <>
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
      <Newsletter />
    </>
  );
}
