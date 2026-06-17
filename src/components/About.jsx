function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-inner about-grid">
        <div>
          <p className="eyebrow">About us</p>
          <h2>Built for quick, trusted online shopping.</h2>
        </div>
        <div className="about-content">
          <p>
            ShopEase is a sample e-commerce brand focused on clean product
            discovery, fair pricing, and smooth checkout experiences for busy
            customers.
          </p>
          <div className="about-stats">
            <div>
              <strong>5k+</strong>
              <span>Happy customers</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>Fast dispatch</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
