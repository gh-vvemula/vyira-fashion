import type { MetadataRoute } from "next";

import { collections } from "@/data/site";

const baseUrl = "https://vyira.com";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();
  const staticRoutes = [
    "",
    "/brand",
    "/women",
    "/men",
    "/new-in",
    "/privacy-policy",
    "/terms-conditions",
    "/shipping-returns"
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: updatedAt,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8
  }));

  const collectionEntries: MetadataRoute.Sitemap = collections.map((collection) => ({
    url: `${baseUrl}/collections/${collection.slug}`,
    lastModified: updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticEntries, ...collectionEntries];
}
