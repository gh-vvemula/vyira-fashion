import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Vyira privacy policy for customer enquiries, communications, and order support."
};

export default function PrivacyPolicyPage() {
  return (
    <section className="site-shell legal-page section-space">
      <p className="eyebrow">Policy</p>
      <h1>Privacy Policy</h1>
      <div className="legal-copy">
        <p>
          Vyira collects only the information customers voluntarily share through enquiries,
          WhatsApp, phone calls, and email conversations.
        </p>
        <p>
          We may use your name, phone number, email address, and order details to respond to
          enquiries, confirm availability, coordinate fulfilment, and share updates related to
          your request.
        </p>
        <p>
          We do not sell your personal information. We may retain communication records for support,
          order history, and operational follow-up.
        </p>
        <p>
          If you want your information removed or updated, contact
          {" "}
          <a href="mailto:vyirainternational@gmail.com">vyirainternational@gmail.com</a>.
        </p>
      </div>
    </section>
  );
}
