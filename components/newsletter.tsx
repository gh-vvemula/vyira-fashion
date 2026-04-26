export function Newsletter() {
  return (
    <section className="site-shell section-space" id="newsletter">
      <div className="newsletter">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h2>Receive launch drops, styling notes, and early access.</h2>
        </div>
        <form className="newsletter__form">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input id="email" type="email" placeholder="Enter your email" />
          <button type="submit" className="button button--primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
