import { CategoryGrid } from "@/components/category-grid";
import { EditorialBanner } from "@/components/editorial-banner";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { ProductGrid } from "@/components/product-grid";
import { getFeaturedProducts } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid audience="Women" />
      <CategoryGrid audience="Men" />
      <EditorialBanner />
      <ProductGrid
        title="Brand highlights"
        subtitle="A launch assortment that balances wardrobe essentials with statement layers."
        products={getFeaturedProducts()}
      />
      <Newsletter />
    </>
  );
}
