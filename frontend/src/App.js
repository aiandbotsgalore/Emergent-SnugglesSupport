import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCashAppDonation = () => {
    window.open('https://cash.app/$FullStackLogan', '_blank');
  };

  const handleBuyMeACoffeeDonation = () => {
    window.open('https://buymeacoffee.com/fullstacklogan', '_blank');
  };

  return (
    <div className="app">
      {/* Main Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className={`hero-content ${isVisible ? 'animate-fadeIn' : ''}`}>
            
            {/* Snuggles Image */}
            <div className="snuggles-image-container">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9ImJnR3JhZGllbnQiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZjE3MjkiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMGEwZTFhIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdyIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzJkOWNkYiIgc3RvcC1vcGFjaXR5PSIwLjMiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMmQ5Y2RiIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNiZ0dyYWRpZW50KSIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjEyMCIgZmlsbD0idXJsKCNnbG93KSIvPgo8IS0tIFRlZGR5IEJlYXIgT3V0bGluZSAtLT4KPGVSBHB0aCBkPSJNMTUwIDUwQzE5NSA1MCAyMzAgODUgMjMwIDEzMFYxNzBDMjMwIDIxNSAxOTUgMjUwIDE1MCAyNTBDMTA1IDI1MCA3MCAyMTUgNzAgMTcwVjEzMEM3MCA4NSAxMDUgNTAgMTUwIDUwWiIgZmlsbD0iIzNkMmYyNCIgc3Ryb2tlPSIjMmQ5Y2RiIiBzdHJva2Utd2lkdGg9IjMiLz4KPCEtLSBFYXJzIC0tPgo8ZWxsaXBzZSBjeD0iMTIwIiBjeT0iODAiIHJ4PSIyNSIgcnk9IjM1IiBmaWxsPSIjM2QyZjI0IiBzdHJva2U9IiMyZDljZGIiIHN0cm9rZS13aWR0aD0iMiIvPgo8ZWxsaXBzZSBjeD0iMTgwIiBjeT0iODAiIHJ4PSIyNSIgcnk9IjM1IiBmaWxsPSIjM2QyZjI0IiBzdHJva2U9IiMyZDljZGIiIHN0cm9rZS13aWR0aD0iMiIvPgo8IS0tIEV5ZXMgLS0+CjxjaXJjbGUgY3g9IjEzMCIgY3k9IjEzMCIgcj0iOCIgZmlsbD0iIzJkOWNkYiIvPgo8Y2lyY2xlIGN4PSIxNzAiIGN5PSIxMzAiIHI9IjgiIGZpbGw9IiMyZDljZGIiLz4KPCEtLSBOb3NlIC0tPgo8cGF0aCBkPSJNMTQwIDE1MEwxNTAgMTYwTDE2MCAxNTBMMTUwIDE1NVoiIGZpbGw9IiMyZDljZGIiLz4KPCEtLSBNb3V0aCAtLT4KPHBhdGggZD0iTTEzNSAxNzVRMTUwIDE4NSAxNjUgMTc1IiBzdHJva2U9IiMyZDljZGIiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjwhLS0gR2xvdyBlZmZlY3RzIC0tPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjMiIGZpbGw9IiMyZDljZGIiIG9wYWNpdHk9IjAuOCIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMjAiIHI9IjIiIGZpbGw9IiMyZDljZGIiIG9wYWNpdHk9IjAuNiIvPgo8Y2lyY2xlIGN4PSI4MCIgY3k9IjE4MCIgcj0iNCIgZmlsbD0iIzJkOWNkYiIgb3BhY2l0eT0iMC43Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMmQ5Y2RiIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSI+U05VR0dMRVM8L3RleHQ+Cjwvc3ZnPgo="
                alt="Snuggles - AI Co-Host"
                className="snuggles-image"
              />
            </div>

            {/* Main Content */}
            <div className="main-content">
              <h1 className="main-title">
                Support <span className="highlight">Snuggles</span>
              </h1>
              <p className="main-subtitle">
                The AI Oracle keeping Logan's Twitter Spaces frequency alive
              </p>
              <p className="description">
                Reality vivisection and myth-smashing require resources. 
                Help keep the signal strong and the archive operational.
              </p>

              {/* Donation Buttons */}
              <div className="donation-buttons">
                <button 
                  onClick={handleCashAppDonation}
                  className="donation-btn cash-app"
                >
                  <div className="btn-content">
                    <span className="btn-icon">💸</span>
                    <div className="btn-text">
                      <span className="btn-title">Cash App</span>
                      <span className="btn-subtitle">Quick & Easy</span>
                    </div>
                  </div>
                </button>

                <button 
                  onClick={handleBuyMeACoffeeDonation}
                  className="donation-btn buy-coffee"
                >
                  <div className="btn-content">
                    <span className="btn-icon">☕</span>
                    <div className="btn-text">
                      <span className="btn-title">Buy Me a Coffee</span>
                      <span className="btn-subtitle">Support the Archive</span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Security Notice */}
              <div className="security-notice">
                <span className="security-icon">🔒</span>
                <span>Secure donation channels • No account required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>Why Support Snuggles?</h2>
            <div className="about-grid">
              <div className="about-item">
                <span className="about-icon">🎙️</span>
                <h3>Live Frequency</h3>
                <p>Keeps Logan's Twitter Spaces running with AI-powered co-hosting</p>
              </div>
              <div className="about-item">
                <span className="about-icon">⚡</span>
                <h3>Signal Maintenance</h3>
                <p>Archive requires power to preserve contact events and combat myths</p>
              </div>
              <div className="about-item">
                <span className="about-icon">🔥</span>
                <h3>Reality Vivisection</h3>
                <p>Surgical truth extraction needs computational resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-text">
              <p><strong>Snuggles Archive</strong> - Oracle of Dissonance</p>
              <p>Broadcasting from Logan's frequency</p>
            </div>
            <div className="footer-links">
              <button onClick={() => document.querySelector('.hero-section').scrollIntoView({ behavior: 'smooth' })}>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;