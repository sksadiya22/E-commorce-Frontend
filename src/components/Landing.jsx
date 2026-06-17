import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function Landing() {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>ShopEase</h3>
            <p>
              Fresh finds, easy checkout, fast delivery, and friendly support
              for everyday online shopping.
            </p>
          </div>

          <div className="footer-column">
            <h4>Shop</h4>
            <a href="#home">New arrivals</a>
            <a href="#about">Best sellers</a>
            <a href="#testimonials">Customer reviews</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <a href="#contact">Contact us</a>
            <a href="#contact">Delivery help</a>
            <a href="#contact">Returns</a>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <a href="#contact">Instagram</a>
            <a href="#contact">Facebook</a>
            <a href="#contact">hello@shopease.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>(c) 2026 ShopEase. All rights reserved.</p>
          <p>Secure payments | Fast delivery | Easy returns</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
