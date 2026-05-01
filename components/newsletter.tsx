"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  function handleJoin() {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus("Enter your email to open a pre-filled member access request.");
      return;
    }

    const subject = encodeURIComponent("Vyira member access request");
    const body = encodeURIComponent(
      ["Please add me to member access updates.", "", `Email: ${trimmedEmail}`].join("\n")
    );

    window.location.href = `mailto:founder@vyira.com?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with a pre-filled member access request.");
  }

  return (
    <section className="site-shell section-space" id="newsletter">
      <div className="newsletter">
        <div>
          <p className="eyebrow">Member access</p>
          <h2>Get first look access to new drops and restocks.</h2>
        </div>
        <div className="newsletter__form" role="group" aria-label="Member access email capture">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="button" className="button button--primary" onClick={handleJoin}>
            Join now
          </button>
        </div>
        {status ? <p className="enquiry-status">{status}</p> : null}
      </div>
    </section>
  );
}
