import Link from "next/link";

const storyCards = [
  {
    href: "/collections/women-dresses",
    eyebrow: "Women / Dresses",
    title: "Ease in every silhouette.",
    copy: "Fluid dresses with a polished drape and a softer feel from morning plans to evening wear.",
    tone: "home-story--sand"
  },
  {
    href: "/collections/men-trousers",
    eyebrow: "Men / Trousers",
    title: "Tailoring that feels lighter.",
    copy: "Clean lines, easy movement, and refined fabrics that stay comfortable through the day.",
    tone: "home-story--slate"
  },
  {
    href: "/collections/women-tops",
    eyebrow: "Women / Tops",
    title: "Soft structure, easy polish.",
    copy: "Refined tops and shirts designed to sit softly on the body with a premium finish.",
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
          <h2>Collections designed around feel, finish, and everyday elegance.</h2>
        </div>
        <p>
          Dresses, tops, denim, trousers, outerwear, and activewear shaped with comfort,
          thoughtful design, and fabrics chosen to feel better with every wear.
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
