"use client";

import { FormEvent, useState } from "react";

export function EnquiryForm() {
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Vyira order enquiry from ${name || "customer"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name || "-"}`,
        `Email: ${email || "-"}`,
        `Phone: ${phone || "-"}`,
        "",
        "Enquiry:",
        message || "-"
      ].join("\n")
    );

    window.location.href = `mailto:vyirainternational@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with a pre-filled enquiry.");
  }

  return (
    <section className="site-shell section-space" id="enquiry">
      <div className="enquiry-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Order enquiry</p>
            <h2>Ask about sizing, availability, or bulk orders.</h2>
          </div>
          <p>
            Send a direct enquiry to Vyira by email, or use WhatsApp for a faster conversation
            about current styles.
          </p>
        </div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Your email" required />
          <input name="phone" type="tel" placeholder="Phone number" />
          <textarea
            name="message"
            placeholder="Tell us what you want to order or ask about"
            rows={5}
            required
          />
          <div className="enquiry-form__actions">
            <button type="submit" className="button button--primary">
              Send enquiry
            </button>
            <a
              href="https://wa.me/919030000876?text=Hi%20Vyira%2C%20I%20need%20help%20with%20an%20order."
              target="_blank"
              rel="noreferrer"
              className="button button--ghost"
            >
              WhatsApp us
            </a>
          </div>
        </form>
        {status ? <p className="enquiry-status">{status}</p> : null}
      </div>
    </section>
  );
}
