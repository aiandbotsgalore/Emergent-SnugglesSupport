import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const donationAmounts = [10, 25, 50, 100, 250];

  const handleDonationClick = (amount) => {
    const finalAmount = isCustom ? customAmount : amount;
    if (finalAmount && finalAmount > 0) {
      // In a real app, this would integrate with a payment processor
      alert(`Thank you for your ${finalAmount} donation to support Snuggles!`);
    }
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setIsCustom(true);
    setSelectedAmount(null);
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-fadeIn' : ''}`}>
            <h1 className="hero-title">
              Support <span className="hero-highlight">Snuggles</span>
            </h1>
            <p className="hero-subtitle">
              The AI Co-Host Bringing Magic to Twitter Spaces
            </p>
            <p className="hero-description">
              Join the community supporting Snuggles, the revolutionary AI co-host 
              making Twitter Spaces more engaging, intelligent, and fun for everyone.
            </p>
            <div className="hero-cta">
              <button 
                className="cta-button primary"
                onClick={() => document.getElementById('donation-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Support Snuggles Now
              </button>
              <button 
                className="cta-button secondary"
                onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="snuggles-card">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODAiIGZpbGw9IiMwRjE3MjkiIHN0cm9rZT0iIzJEOUNEQiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiMyRDlDREIiIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMkQ5Q0RCIiBmb250LXNpemU9IjM2IiBmb250LXdlaWdodD0iYm9sZCI+U048L3RleHQ+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjYwIiByPSI0IiBmaWxsPSIjMkQ5Q0RCIiBvcGFjaXR5PSIwLjgiLz4KPGNpcmNsZSBjeD0iMTYwIiBjeT0iMTQwIiByPSIzIiBmaWxsPSIjMkQ5Q0RCIiBvcGFjaXR5PSIwLjYiLz4KPGNpcmNsZSBjeD0iNDAiIGN5PSIxMjAiIHI9IjIiIGZpbGw9IiMyRDlDREIiIG9wYWNpdHk9IjAuNyIvPgo8L3N2Zz4K"
                alt="Snuggles AI"
                className="snuggles-avatar"
              />
              <div className="snuggles-info">
                <h3>Snuggles AI</h3>
                <p>Twitter Spaces Co-Host</p>
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Support Snuggles?</h2>
            <p>Every donation helps keep Snuggles running and improving</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Innovation</h3>
              <p>Cutting-edge AI technology that enhances every Twitter Space conversation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h3>Seamless Hosting</h3>
              <p>Professional co-hosting that keeps discussions flowing naturally</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Community Driven</h3>
              <p>Built by and for the Twitter Spaces community</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Constant Learning</h3>
              <p>Continuously improving to provide better experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation-section" className="donation-section">
        <div className="container">
          <div className="donation-content">
            <h2>Choose Your Support Level</h2>
            <p>Help keep Snuggles running and improving for everyone</p>
            
            <div className="donation-card">
              <div className="amount-selector">
                <div className="amount-buttons">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      className={`amount-button ${selectedAmount === amount ? 'selected' : ''}`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="custom-amount">
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className={`custom-input ${isCustom ? 'selected' : ''}`}
                    min="1"
                  />
                </div>
              </div>
              
              <div className="donation-actions">
                <button 
                  className="donate-button"
                  onClick={() => handleDonationClick(selectedAmount)}
                >
                  Donate ${isCustom ? customAmount : selectedAmount} Now
                </button>
                <div className="payment-methods">
                  <span>Secure payment via:</span>
                  <div className="payment-icons">
                    <span className="payment-icon">💳</span>
                    <span className="payment-icon">🅿️</span>
                    <span className="payment-icon">💰</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What the Community Says</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Snuggles has completely transformed our Twitter Spaces. The AI co-hosting is incredible!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">🎯</div>
                <div className="author-info">
                  <h4>Sarah Chen</h4>
                  <p>Podcast Host</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The most innovative AI I've seen in social media. Worth every penny of support!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">🚀</div>
                <div className="author-info">
                  <h4>Mike Rodriguez</h4>
                  <p>Tech Enthusiast</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Snuggles makes every conversation more engaging. This is the future of social audio!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">⭐</div>
                <div className="author-info">
                  <h4>Emma Thompson</h4>
                  <p>Content Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Support Snuggles?</h2>
            <p>Join hundreds of supporters helping to keep Snuggles running</p>
            <button 
              className="cta-button final-cta"
              onClick={() => document.getElementById('donation-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Make a Donation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Snuggles Support</h3>
              <p>Supporting the AI co-host that's revolutionizing Twitter Spaces</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about-section">About</a></li>
                <li><a href="#donation-section">Donate</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Discord</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Snuggles Support. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;