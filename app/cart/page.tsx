import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Vyira cart and continue shopping premium apparel for women and men."
};

export default function CartPage() {
  return (
    <>
      <PageHero
        eyebrow="Cart"
        title="Your cart is ready for the pieces that stay in rotation."
        description="Start building your Vyira wardrobe with apparel-first essentials across women and men."
      />
      <section className="site-shell section-space">
        <div className="account-shell">
          <div className="account-card">
            <h3>Your cart is empty.</h3>
            <p>
              Explore new arrivals, women&apos;s edits, and men&apos;s staples to start building
              your selection.
            </p>
            <div className="hero__actions">
              <Link href="/new-in" className="button button--primary">
                Shop New In
              </Link>
              <Link href="/women" className="button button--ghost">
                Shop Women
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
