import Link from "next/link";

const storyCards = [
  {
    href: "/collections/women-dresses",
    eyebrow: "Women / Dresses",
    title: "Occasion dressing, stripped back.",
    copy: "Fluid dresses and sharper day-to-evening silhouettes built for repeat wear.",
    tone: "home-story--sand"
  },
  {
    href: "/collections/men-trousers",
    eyebrow: "Men / Trousers",
    title: "Tailoring that works every day.",
    copy: "Clean lines, travel-ready fabrics, and fits that move from desk to dinner.",
    tone: "home-story--slate"
  },
  {
    href: "/collections/women-tops",
    eyebrow: "Women / Tops",
    title: "Soft structure, sharp finish.",
    copy: "Refined tops and shirts that anchor a modern weekly wardrobe.",
    tone: "home-story--stone"
  }
];

const quickLinks = [
  { href: "/collections/women-denim", label: "Women's Denim" },
  { href: "/collections/men-outerwear", label: "Men's Outerwear" },
  { href: "/collections/women-activewear", label: "Women's Activewear" },
  { href: "/collections/men-shirts", label: "Men's Shirts" }
];

export function HomeStories() {
  return (
    <section className="site-shell section-space">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Featured edits</p>
          <h2>Merchandised around real apparel needs.</h2>
        </div>
        <p>
          A cleaner homepage flow built around the categories customers actually shop first:
          dresses, tops, denim, trousers, outerwear, and activewear.
        </p>
      </div>
      <div className="home-story-grid">
        {storyCards.map((story, index) => (
          <Link
            key={story.href}
            href={story.href}
            className={`home-story-card ${story.tone} ${index === 0 ? "home-story-card--hero" : ""}`}
          >
            <p className="eyebrow">{story.eyebrow}</p>
            <h3>{story.title}</h3>
            <p>{story.copy}</p>
            <span>Shop the edit</span>
          </Link>
        ))}
      </div>
      <div className="quick-link-row" aria-label="Quick apparel links">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href} className="quick-link-pill">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
