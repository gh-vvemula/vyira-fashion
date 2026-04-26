import type { Metadata } from "next";
import { Suspense } from "react";

import { SearchCatalog } from "@/components/search-catalog";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Vyira collections and apparel categories for women and men."
};

export default function SearchPage() {
  return (
    <Suspense>
      <SearchCatalog />
    </Suspense>
  );
}
