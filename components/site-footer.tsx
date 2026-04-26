import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__grid">
        <div>
          <p className="eyebrow">Vyira</p>
          <p className="footer-copy">
            Contemporary men&apos;s and women&apos;s fashion with a clean, elevated point of view.
          </p>
        </div>
        <div>
          <p className="eyebrow">Shop</p>
          <div className="footer-links">
            <Link href="/women">Women</Link>
            <Link href="/men">Men</Link>
            <Link href="/new-in">New In</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <div className="footer-links">
            <a href="mailto:hello@vyira.co">hello@vyira.co</a>
            <a href="tel:+910000000000">+91 00000 00000</a>
            <span>Shipping across India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
