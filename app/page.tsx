'use client';

import { useState } from 'react';

const products = [
  { id: 1, category: 'beer', name: 'Tusker Lager', desc: 'Classic Kenyan lager with a crisp finish.', price: 'KSh 280' },
  { id: 2, category: 'beer', name: 'White Cap', desc: 'Bright and smooth, perfect for everyday unwind.', price: 'KSh 240' },
  { id: 3, category: 'spirits', name: 'Jameson', desc: 'Warm, mellow whiskey with a smooth finish.', price: 'KSh 1,950' },
  { id: 4, category: 'spirits', name: "Gilbey's Gin", desc: 'Clean botanical notes for cocktails and mixed drinks.', price: 'KSh 1,650' },
  { id: 5, category: 'wine', name: 'Merlot Reserve', desc: 'Rich fruit and velvet tannins for relaxed evenings.', price: 'KSh 1,480' },
  { id: 6, category: 'cider', name: "Hunter's Dry", desc: 'Bright, crisp cider with a lightly sweet finish.', price: 'KSh 310' },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleProducts = activeFilter === 'all' ? products : products.filter((product) => product.category === activeFilter);

  return (
    <>
      <div className="cookie-banner visible">
        <div className="cookie-inner">
          <p>
            This site uses cookies and by entering you acknowledge that you have read our{' '}
            <a href="#">Privacy and Cookie Notice</a> and <a href="#">Conditions of Use</a>.
          </p>
          <div className="cookie-actions">
            <button className="btn btn-secondary" type="button">Manage Cookies</button>
            <button className="btn btn-primary" type="button">Accept All Cookies</button>
          </div>
        </div>
      </div>

      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-block">
            <div className="brand-mark">C</div>
            <div className="brand-copy">
              <span className="brand-name">Cyden General Enterprises - Eldoret City</span>
            </div>
          </div>

          <div className="header-actions">
            <button className="icon-button" type="button" aria-label="Share outlet">Share</button>
            <a className="call-badge" href="tel:+254110603242">Call to Order: 0110603242</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Open • Closes at 8:00 PM</p>
              <h1>Pick up the drinks you love at a great price.</h1>
              <p className="lead">A wide selection of your favourite drinks at unbeatable prices. Try us today.</p>

              <div className="cta-row">
                <a className="btn btn-primary" href="#products">Shop now</a>
                <a className="btn btn-secondary" href="tel:+254110603242">Call outlet</a>
              </div>

              <ul className="hero-meta">
                <li>Free delivery on selected orders</li>
                <li>Trusted local convenience</li>
                <li>Fast pick-up and direct ordering</li>
              </ul>
            </div>

            <div className="hero-visual" aria-label="Featured drinks illustration">
              <div className="floating-card card-one">
                <span className="mini-label">Top pick</span>
                <strong>Tusker</strong>
                <small>Refreshing lager</small>
              </div>
              <div className="bottle-scene">
                <div className="bottle bottle-large">
                  <span className="label">EABL</span>
                </div>
                <div className="bottle bottle-small">
                  <span className="label">Liqueur</span>
                </div>
              </div>
              <div className="floating-card card-two">
                <span className="mini-label">Deal</span>
                <strong>Save 20%</strong>
                <small>On mixed packs</small>
              </div>
            </div>
          </div>
        </section>

        <section className="promo-strip">
          <div className="container promo-inner">
            <div>
              <span className="promo-kicker">Free Delivery</span>
              <strong>Discounts on select items</strong>
            </div>
            <a href="#products" className="promo-link">Shop now</a>
          </div>
        </section>

        <section className="catalog">
          <div className="container">
            <div className="section-head">
              <p className="section-tag">Popular picks</p>
              <h2>Browse by category</h2>
            </div>

            <div className="category-filters" aria-label="Product category filters">
              {['all', 'beer', 'spirits', 'wine', 'cider'].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`filter-btn${activeFilter === filter ? ' active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>

            <div className="product-grid" id="products">
              {visibleProducts.map((product) => (
                <article key={product.id} className="product-card" data-category={product.category}>
                  <div className={`product-media ${product.category === 'beer' ? product.id % 2 === 0 ? 'beer-two' : 'beer-one' : product.category === 'spirits' ? product.id % 2 === 0 ? 'spirit-two' : 'spirit-one' : product.category === 'wine' ? 'wine-one' : 'cider-one'}`}></div>
                  <div className="product-info">
                    <span className="tag">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    <div className="product-meta">
                      <span className="price">{product.price}</span>
                      <button type="button">Add</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">✓</span>
              <h3>Fast Delivery</h3>
              <p>Quick service in and around the neighbourhood.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">★</span>
              <h3>Curated Collection</h3>
              <p>Top-selling brands and crowd favourites.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">⚡</span>
              <h3>Value Deals</h3>
              <p>Better prices on premium drinks and bundles.</p>
            </div>
          </div>
        </section>

        <section className="outlet-info">
          <div className="container outlet-grid">
            <div>
              <p className="section-tag">About the outlet</p>
              <h2>Your neighbourhood drinks stop.</h2>
              <p>
                Cyden General Enterprises in Eldoret City is all about convenience, trusted service,
                and a friendly local experience with a wide selection of favourites for every mood.
              </p>
              <div className="info-list">
                <div><strong>Location:</strong> Eldoret City, Kenya</div>
                <div><strong>Opening hours:</strong> 8:00 AM - 8:00 PM</div>
                <div><strong>Contact:</strong> 0110603242</div>
              </div>
            </div>

            <div className="cta-panel">
              <h3>Need something quick?</h3>
              <a className="btn btn-primary" href="sms:+254110603242">Send message</a>
              <a className="btn btn-secondary" href="tel:+254110603242">Call outlet</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="brand-mark">C</div>
            <span>Cyden General Enterprises</span>
          </div>

          <div className="footer-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="tel:+254110603242">Call 0110603242</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Powered by Agiza.io</p>
          <div className="legal-links">
            <a href="#">Privacy & Cookie Notice</a>
            <a href="#">Conditions of Use</a>
            <a href="#">Accessibility Statement</a>
          </div>
        </div>
      </footer>
    </>
  );
}
