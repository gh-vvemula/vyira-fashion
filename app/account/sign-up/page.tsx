import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Sign up with Vyira for launch updates, favorites, and upcoming member access."
};

export default function SignUpPage() {
  return (
    <>
      <PageHero
        eyebrow="Sign Up"
        title="Create your place inside the Vyira launch story."
        description="Be first to hear about drops, brand updates, and member features as Vyira grows."
      />
      <section className="site-shell section-space">
        <div className="account-shell">
          <div className="account-card">
            <h3>Join the early Vyira circle.</h3>
            <p>
              We are keeping sign-up personal during launch. Reach out directly and we will add you
              to the brand update list.
            </p>
            <div className="hero__actions">
              <a
                href="mailto:founder@vyira.com?subject=Vyira%20Sign%20Up"
                className="button button--primary"
              >
                Sign Up with Email
              </a>
              <Link href="/help" className="button button--ghost">
                Need Help?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
