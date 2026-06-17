import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="section-inner hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">New season collection</p>
          <h1>Simple shopping for everyday essentials.</h1>
          <p className="hero-text">
            Discover quality products, fast delivery, and friendly support from
            one easy online store.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Start shopping
            </a>
            <a className="secondary-button" href="#about">
              Learn more
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Featured store products">
          <img src={heroImage} alt="Assorted e-commerce products" />
          <div className="deal-card">
            <span>Today only</span>
            <strong>25% off best sellers</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
