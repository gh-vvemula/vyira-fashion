import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__grid">
        <div>
          <p className="eyebrow">VYI&#x301;RA</p>
          <p className="footer-copy">
            Modern western apparel for women and men, built around dresses, tops, denim,
            tailoring, outerwear, and activewear.
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
            <a href="mailto:vyirainternational@gmail.com">vyirainternational@gmail.com</a>
            <a href="tel:+919030000876">+91 90300 00876</a>
            <span>Shipping across India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
