import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__grid">
        <div>
          <p className="eyebrow">VYI&#x301;RA</p>
          <p className="footer-copy">
            Modern apparel for women and men, shaped by textile roots, natural-feel fabrics, and
            the promise of elegance by nature.
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
          <p className="eyebrow">Policies</p>
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/shipping-returns">Shipping & Returns</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <div className="footer-links">
            <a href="mailto:founder@vyira.com">founder@vyira.com</a>
            <a href="tel:+919030000876">+91 90300 00876</a>
            <span>Shipping to selected worldwide markets</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
