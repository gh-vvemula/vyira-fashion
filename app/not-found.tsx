import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-shell not-found">
      <p className="eyebrow">404</p>
      <h1>This collection is not on the rack.</h1>
      <p>Return to the storefront and keep exploring the latest Vyira categories.</p>
      <Link href="/" className="button button--primary">
        Back to home
      </Link>
    </section>
  );
}
