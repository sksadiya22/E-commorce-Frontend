function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-inner contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Have a product question?</h2>
          <p>
            Send a message and the ShopEase team will help with orders,
            delivery, or product details.
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your name" aria-label="Your name" />
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <textarea placeholder="Your message" aria-label="Your message" rows="4" />
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
