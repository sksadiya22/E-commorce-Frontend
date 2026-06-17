function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home">
          ShopEase
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-button" href="#contact">
          Shop now
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
