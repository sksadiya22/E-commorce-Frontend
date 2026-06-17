const reviews = [
  {
    name: "Aarav M.",
    text: "The products arrived quickly and looked exactly like the photos.",
  },
  {
    name: "Priya S.",
    text: "Clean website, easy checkout, and great prices on daily essentials.",
  },
  {
    name: "Neha R.",
    text: "Support was helpful when I had a question about my order.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-inner">
        <p className="eyebrow">Testimonials</p>
        <h2>Loved by everyday shoppers.</h2>
        <div className="testimonial-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.name}>
              <p>"{review.text}"</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
