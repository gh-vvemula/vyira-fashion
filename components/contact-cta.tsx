export function ContactCta() {
  return (
    <div className="floating-contact" aria-label="Quick contact actions">
      <a
        href="https://wa.me/919030000876?text=Hi%20Vyira%2C%20I%20want%20to%20place%20an%20order."
        target="_blank"
        rel="noreferrer"
        className="floating-contact__button floating-contact__button--whatsapp"
      >
        WhatsApp
      </a>
      <a href="tel:+919030000876" className="floating-contact__button">
        Call
      </a>
    </div>
  );
}
