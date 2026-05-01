import Image from "next/image";
import Link from "next/link";

const launchNotes = [
  "Women + men edits",
  "Natural-feel fabrics",
  "Launch support across India"
];

export function ComingSoonHero() {
  return (
    <section className="coming-soon site-shell">
      <div className="coming-soon__atmosphere" aria-hidden="true">
        <span className="coming-soon__orb coming-soon__orb--left" />
        <span className="coming-soon__orb coming-soon__orb--right" />
      </div>

      <div className="coming-soon__content">
        <p className="eyebrow">Vyira launch update</p>
        <div className="coming-soon__logo-frame">
          <Image
            src="/brand/vyira-wordmark.svg"
            alt="Vyira"
            width={1320}
            height={384}
            priority
            className="coming-soon__logo"
          />
        </div>
        <h1 className="coming-soon__title">Coming soon.</h1>
        <p className="coming-soon__lede">
          A sharper Vyira experience is on the way. We are preparing the launch space for premium
          women’s and men’s fashion shaped by heritage, fluid tailoring, and effortless polish.
        </p>

        <div className="coming-soon__actions">
          <Link href="#newsletter" className="button button--primary">
            Get member access
          </Link>
          <Link href="/brand" className="button button--ghost">
            Explore the brand
          </Link>
        </div>

        <div className="coming-soon__notes" aria-label="Launch highlights">
          {launchNotes.map((note) => (
            <span key={note} className="coming-soon__note">
              {note}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
