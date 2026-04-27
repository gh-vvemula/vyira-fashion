import Image from "next/image";

export function BrandLegacy() {
  return (
    <section className="site-shell section-space">
      <div className="brand-legacy">
        <div className="section-heading brand-legacy__intro">
          <div>
            <p className="eyebrow">Brand legacy</p>
            <h2>A story of fabric, feeling, and quiet pride.</h2>
          </div>
          <div className="brand-legacy__intro-copy">
            <p>
              Vyira begins with a simple idea: what you wear should feel easy, refined, and
              natural from the moment it touches your skin.
            </p>
            <div className="brand-legacy__logo-frame" aria-hidden="true">
              <Image
                src="/brand/vy-final-logo.png"
                alt=""
                width={184}
                height={184}
                className="brand-legacy__logo"
              />
            </div>
          </div>
        </div>
        <div className="brand-legacy__grid">
          <div className="brand-legacy__feature">
            <p className="eyebrow">Founder</p>
            <h3>Vinay Vemula</h3>
            <p>
              After 15 years in IT, Vinay Vemula chose to build something closer to home. Vyira
              comes from his desire to create clothing that looks clean, feels comfortable, and
              brings quiet confidence to everyday life.
            </p>
          </div>
          <div className="brand-legacy__feature">
            <p className="eyebrow">Textile roots</p>
            <h3>Telugu Padmashali heritage</h3>
            <p>
              In a Telugu Padmashali family, fabric is never just fabric. It carries care, skill,
              and pride. That traditional respect for cloth and craftsmanship still guides Vyira
              today.
            </p>
          </div>
          <div className="brand-legacy__feature">
            <p className="eyebrow">Promise</p>
            <h3>Made to feel right</h3>
            <p>
              Vyira brings that spirit into modern design through clean silhouettes, soft comfort,
              and thoughtful fabrics. The goal is simple: instant connection, great feel, and
              elegance by nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
