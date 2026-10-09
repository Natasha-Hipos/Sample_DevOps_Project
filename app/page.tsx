export default function Home() {
  return (
    <main>
      <nav>
        <h2>SHOPNAAAA!!!</h2>

        <div>
          <a href="#">Home</a>
          <a href="#products">Recommended</a>
          <a href="#about">AMBOT</a>
        </div>

        <button>🛒 Cart</button>
      </nav>

      <section className="hero">
        <h1>Shop Everything You know</h1>
        <p>Quality products at affordable prices.</p>
        <button>Shop Now</button>
      </section>

      <section id="products">
        <h2>Featured Products</h2>

        <div className="products">
          <div className="product">
            <div className="image">🎧</div>
            <h3>Wireless Headphones</h3>
            <p>₱1,499</p>
            <button>Add to Cart</button>
          </div>

          <div className="product">
            <div className="image">⌚</div>
            <h3>Smart Watch</h3>
            <p>₱2,499</p>
            <button>Add to Cart</button>
          </div>

          <div className="product">
            <div className="image">👟</div>
            <h3>Running Shoes</h3>
            <p>₱1,999</p>
            <button>Add to Cart</button>
          </div>

          <div className="product">
            <div className="image">🎒</div>
            <h3>Travel Backpack</h3>
            <p>₱899</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Why ShopEase?</h2>

        <p>🚚 Fast Delivery</p>
        <p>🔒 Secure Shopping</p>
        <p>💰 Affordable Prices</p>
      </section>

      <footer>
        <p>© 2026 ShopEase</p>
      </footer>
    </main>
  );
}