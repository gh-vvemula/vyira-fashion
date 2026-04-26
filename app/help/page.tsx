import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Help",
  description:
    "Get help from Vyira with ordering guidance, contact support, shipping notes, and customer care details."
};

const helpTopics = [
  {
    title: "Ordering support",
    body: "Need help choosing a category, size direction, or collection? Reach out and we will guide you personally."
  },
  {
    title: "Shipping and delivery",
    body: "Vyira is launching with dispatch support across India. Delivery timelines may vary as the brand grows."
  },
  {
    title: "Account and favorites",
    body: "Member features like saved favorites and deeper account tools are being rolled out in stages."
  }
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Support that feels personal, not automated."
        description="For product questions, order guidance, and customer care, contact Vyira directly and we will help you choose with confidence."
      />
      <section className="site-shell section-space">
        <div className="support-grid">
          {helpTopics.map((topic) => (
            <article key={topic.title} className="support-card">
              <h3>{topic.title}</h3>
              <p>{topic.body}</p>
            </article>
          ))}
        </div>
        <div className="support-direct">
          <h3>Contact Vyira</h3>
          <p>Email: vyirainternational@gmail.com</p>
          <p>Phone: +91 90300 00876</p>
          <div className="hero__actions">
            <a href="mailto:vyirainternational@gmail.com" className="button button--primary">
              Email Support
            </a>
            <a
              href="https://wa.me/919030000876?text=Hi%20Vyira%2C%20I%20need%20help%20with%20your%20store."
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
