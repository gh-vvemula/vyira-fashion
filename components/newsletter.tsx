export function Newsletter() {
  return (
    <section className="site-shell section-space" id="newsletter">
      <div className="newsletter">
        <div>
          <p className="eyebrow">Member access</p>
          <h2>Get first look access to new drops and restocks.</h2>
        </div>
        <form
          className="newsletter__form"
          action="mailto:founder@vyira.com"
          method="post"
          encType="text/plain"
        >
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input id="email" type="email" placeholder="Enter your email" />
          <button type="submit" className="button button--primary">
            Join now
          </button>
        </form>
      </div>
    </section>
  );
}
