export type Audience = "Women" | "Men";

export type Collection = {
  slug: string;
  title: string;
  audience: Audience;
  eyebrow: string;
  summary: string;
  palette: string;
  highlight: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  audience: Audience;
  collectionSlug: string;
  price: string;
  color: string;
  fit: string;
  badge?: string;
};

export type ShippingMarket = {
  code: string;
  country: string;
  flag: string;
  language: string;
  note: string;
};

export const navigation = [
  { href: "/brand", label: "Brand" },
  { href: "/new-in", label: "New In" },
  { href: "/women", label: "Women" },
  { href: "/men", label: "Men" }
];

export const shippingMarkets: ShippingMarket[] = [
  {
    code: "IN",
    country: "India",
    flag: "🇮🇳",
    language: "English",
    note: "Primary shipping market"
  },
  {
    code: "AE",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    language: "English",
    note: "Easy express shipping"
  },
  {
    code: "SG",
    country: "Singapore",
    flag: "🇸🇬",
    language: "English",
    note: "Fast urban delivery routes"
  },
  {
    code: "GB",
    country: "United Kingdom",
    flag: "🇬🇧",
    language: "English",
    note: "Selected worldwide shipping"
  },
  {
    code: "US",
    country: "United States",
    flag: "🇺🇸",
    language: "English",
    note: "Selected worldwide shipping"
  },
  {
    code: "AU",
    country: "Australia",
    flag: "🇦🇺",
    language: "English",
    note: "Selected worldwide shipping"
  }
];

export const collections: Collection[] = [
  {
    slug: "women-dresses",
    title: "Modern Dresses",
    audience: "Women",
    eyebrow: "Women",
    summary: "Sculpted silhouettes, soft drape, and elevated details for every hour of the day.",
    palette: "Rose Clay",
    highlight: "Occasion ready"
  },
  {
    slug: "women-tops",
    title: "Tailored Tops",
    audience: "Women",
    eyebrow: "Women",
    summary: "Sharp shirting, fluid blouses, and versatile layers designed to mix effortlessly.",
    palette: "Pearl Sand",
    highlight: "Desk to dinner"
  },
  {
    slug: "women-denim",
    title: "Refined Denim",
    audience: "Women",
    eyebrow: "Women",
    summary: "Clean washes and confident cuts built to anchor the wardrobe every season.",
    palette: "Indigo Stone",
    highlight: "Signature fit"
  },
  {
    slug: "women-outerwear",
    title: "Outer Layers",
    audience: "Women",
    eyebrow: "Women",
    summary: "Structured trenches, cropped jackets, and soft tailoring with a city-first attitude.",
    palette: "Oat Ink",
    highlight: "Layering staple"
  },
  {
    slug: "women-activewear",
    title: "Active Motion",
    audience: "Women",
    eyebrow: "Women",
    summary: "Performance-led essentials with a polished finish for movement and recovery alike.",
    palette: "Mist Sage",
    highlight: "Performance edit"
  },
  {
    slug: "men-shirts",
    title: "Precision Shirts",
    audience: "Men",
    eyebrow: "Men",
    summary: "Crisp cottons, relaxed camp collars, and breathable staples for every day styling.",
    palette: "Sky Stone",
    highlight: "Refined basics"
  },
  {
    slug: "men-tshirts",
    title: "Core T-Shirts",
    audience: "Men",
    eyebrow: "Men",
    summary: "Premium-weight tees with clean necklines and understated branding.",
    palette: "Graphite Sand",
    highlight: "Uniform builder"
  },
  {
    slug: "men-trousers",
    title: "Smart Trousers",
    audience: "Men",
    eyebrow: "Men",
    summary: "Relaxed tailoring and travel-ready fabrics that stay sharp from day to night.",
    palette: "Charcoal Moss",
    highlight: "Clean tailoring"
  },
  {
    slug: "men-denim",
    title: "Denim Studio",
    audience: "Men",
    eyebrow: "Men",
    summary: "Straight fits, dark rinses, and durable finishes with a streamlined profile.",
    palette: "Deep Indigo",
    highlight: "Built to repeat"
  },
  {
    slug: "men-outerwear",
    title: "Jackets & Layers",
    audience: "Men",
    eyebrow: "Men",
    summary: "Overshirts, bombers, and utility jackets that balance function with polish.",
    palette: "Olive Ash",
    highlight: "Weather smart"
  },
  {
    slug: "men-activewear",
    title: "Move Edit",
    audience: "Men",
    eyebrow: "Men",
    summary: "Technical separates and soft performance staples for training, travel, and recovery.",
    palette: "Steel Blue",
    highlight: "Training ready"
  }
];

export const products: Product[] = [
  {
    id: "vyr-wd-01",
    name: "Contour Midi Dress",
    slug: "contour-midi-dress",
    audience: "Women",
    collectionSlug: "women-dresses",
    price: "₹5,490",
    color: "Cocoa",
    fit: "Slim",
    badge: "Bestseller"
  },
  {
    id: "vyr-wt-02",
    name: "Softline Satin Shirt",
    slug: "softline-satin-shirt",
    audience: "Women",
    collectionSlug: "women-tops",
    price: "₹3,290",
    color: "Pearl",
    fit: "Relaxed"
  },
  {
    id: "vyr-wd-03",
    name: "High Rise Straight Denim",
    slug: "high-rise-straight-denim",
    audience: "Women",
    collectionSlug: "women-denim",
    price: "₹4,190",
    color: "Dark Indigo",
    fit: "Straight"
  },
  {
    id: "vyr-wo-04",
    name: "City Trench Coat",
    slug: "city-trench-coat",
    audience: "Women",
    collectionSlug: "women-outerwear",
    price: "₹7,990",
    color: "Sand",
    fit: "Tailored",
    badge: "New"
  },
  {
    id: "vyr-wa-05",
    name: "Flex Studio Set",
    slug: "flex-studio-set",
    audience: "Women",
    collectionSlug: "women-activewear",
    price: "₹4,790",
    color: "Sage",
    fit: "Compression"
  },
  {
    id: "vyr-ms-08",
    name: "Open Collar Linen Shirt",
    slug: "open-collar-linen-shirt",
    audience: "Men",
    collectionSlug: "men-shirts",
    price: "₹3,690",
    color: "Sky",
    fit: "Relaxed"
  },
  {
    id: "vyr-mt-09",
    name: "Heavyweight Crew Tee",
    slug: "heavyweight-crew-tee",
    audience: "Men",
    collectionSlug: "men-tshirts",
    price: "₹1,990",
    color: "Off White",
    fit: "Boxy"
  },
  {
    id: "vyr-mtr-10",
    name: "Travel Pleat Trouser",
    slug: "travel-pleat-trouser",
    audience: "Men",
    collectionSlug: "men-trousers",
    price: "₹4,590",
    color: "Graphite",
    fit: "Tapered",
    badge: "New"
  },
  {
    id: "vyr-md-11",
    name: "Straight Selvedge Jean",
    slug: "straight-selvedge-jean",
    audience: "Men",
    collectionSlug: "men-denim",
    price: "₹4,990",
    color: "Raw Indigo",
    fit: "Straight"
  },
  {
    id: "vyr-mo-12",
    name: "Utility Overshirt",
    slug: "utility-overshirt",
    audience: "Men",
    collectionSlug: "men-outerwear",
    price: "₹5,790",
    color: "Olive",
    fit: "Regular"
  },
  {
    id: "vyr-ma-13",
    name: "Aero Run Jacket",
    slug: "aero-run-jacket",
    audience: "Men",
    collectionSlug: "men-activewear",
    price: "₹4,490",
    color: "Slate",
    fit: "Athletic"
  }
];

export const heroMetrics = [
  { value: "5", label: "Natural-feel fabric families" },
  { value: "11", label: "Core apparel categories" },
  { value: "48h", label: "Fast dispatch support across India" }
];

export const audienceIntro = {
  Women: "Clean dresses, soft structure, and refined layers for days that shift from work to evening.",
  Men: "Understated staples, sharp shirts, and easy layers with modern tailoring at the core."
};

export function getCollectionsByAudience(audience: Audience) {
  return collections.filter((collection) => collection.audience === audience);
}

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getProductsForCollection(collectionSlug: string) {
  return products.filter((product) => product.collectionSlug === collectionSlug);
}

export function getProductsByAudience(audience: Audience) {
  return products.filter((product) => product.audience === audience);
}

export function getFeaturedProducts(limit = 8) {
  return products.slice(0, limit);
}
