import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Vyira terms and conditions for orders, pricing, communication, and product information."
};

export default function TermsConditionsPage() {
  return (
    <section className="site-shell legal-page section-space">
      <p className="eyebrow">Policy</p>
      <h1>Terms & Conditions</h1>
      <div className="legal-copy">
        <p>
          Vyira offers apparel information, pricing, and order support through this site and direct
          customer communication channels.
        </p>
        <p>
          Product availability, colours, prices, and delivery timelines may change without prior
          notice. Final order confirmation happens only after direct acknowledgement from Vyira.
        </p>
        <p>
          Customers are responsible for providing accurate contact, delivery, and sizing details
          when placing an order enquiry.
        </p>
        <p>
          For any support related to an order or enquiry, contact
          {" "}
          <a href="mailto:founder@vyira.com">founder@vyira.com</a>
          {" "}
          or call
          {" "}
          <a href="tel:+919030000876">+91 90300 00876</a>.
        </p>
      </div>
    </section>
  );
}
