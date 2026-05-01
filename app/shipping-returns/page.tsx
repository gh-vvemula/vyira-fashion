import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Read the Vyira shipping and returns policy for dispatch, delivery support, and return requests."
};

export default function ShippingReturnsPage() {
  return (
    <section className="site-shell legal-page section-space">
      <p className="eyebrow">Policy</p>
      <h1>Shipping & Returns</h1>
      <div className="legal-copy">
        <p>
          Vyira currently ships to a focused set of worldwide markets. Standard dispatch timelines
          are shared during order confirmation and may vary by product availability and destination.
        </p>
        <p>
          Customers should review size and product details carefully before confirming an order.
          If you need help before purchasing, contact us for guidance.
        </p>
        <p>
          Return or exchange requests, where applicable, should be raised promptly after delivery
          with the order reference and issue details.
        </p>
        <p>
          For shipping or returns support, email
          {" "}
          <a href="mailto:founder@vyira.com">founder@vyira.com</a>
          {" "}
          or message us on WhatsApp.
        </p>
      </div>
    </section>
  );
}
