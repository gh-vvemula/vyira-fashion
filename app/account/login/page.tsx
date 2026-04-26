import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Log In",
  description:
    "Log in to Vyira to save favorites, manage your cart, and access upcoming member services."
};

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Log In"
        title="Log in to save what you love."
        description="Favorites, cart history, and member tools are being introduced in phases. For now, use Vyira support to get personal assistance while account features expand."
      />
      <section className="site-shell section-space">
        <div className="account-shell">
          <div className="account-card">
            <h3>Member access is being prepared.</h3>
            <p>
              Your favorites and cart flow now point to account access, just like a premium retail
              storefront. Full login infrastructure is the next phase.
            </p>
            <div className="hero__actions">
              <a href="mailto:vyirainternational@gmail.com" className="button button--primary">
                Continue with Email
              </a>
              <Link href="/account/sign-up" className="button button--ghost">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
