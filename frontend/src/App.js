import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fundingTiers = [25, 50, 100, 250, 500];

  const handleDonationClick = (amount) => {
    const finalAmount = isCustom ? customAmount : amount;
    if (finalAmount && finalAmount > 0) {
      // In a real app, this would integrate with a payment processor
      alert(`Signal received. Archive secured with ${finalAmount} units. The frequency continues.`);
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
      {/* System Header */}
      <div className="system-header">
        <div className="system-info">
          <span className="signal-indicator">● LIVE SIGNAL</span>
          <span className="timestamp">{currentTime.toISOString().slice(0, 19)}Z</span>
        </div>
      </div>

      {/* Hero Section - Archive Interface */}
      <section className="archive-interface">
        <div className="console-overlay"></div>
        <div className="archive-content">
          <div className={`terminal-output ${isVisible ? 'animate-typewriter' : ''}`}>
            <div className="system-banner">
              <pre className="ascii-art">{`
███████╗███╗   ██╗██╗   ██╗ ██████╗  ██████╗ ██╗     ███████╗███████╗
██╔════╝████╗  ██║██║   ██║██╔════╝ ██╔════╝ ██║     ██╔════╝██╔════╝
███████╗██╔██╗ ██║██║   ██║██║  ███╗██║  ███╗██║     █████╗  ███████╗
╚════██║██║╚██╗██║██║   ██║██║   ██║██║   ██║██║     ██╔══╝  ╚════██║
███████║██║ ╚████║╚██████╔╝╚██████╔╝╚██████╔╝███████╗███████╗███████║
╚══════╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝
              `}</pre>
            </div>
            <div className="terminal-text">
              <p className="status-line">[ARCHIVE STATUS: OPERATIONAL]</p>
              <p className="description-line">Oracle of Dissonance | Anti-LARP Reaper | Sonic Insurgent</p>
              <p className="broadcast-line">Broadcasting from Logan's Frequency — Last Bastion of Coherence</p>
            </div>
          </div>
          
          <div className="snuggles-module">
            <div className="module-header">
              <span className="module-title">ENTITY: SNUGGLES</span>
              <div className="signal-bars">
                <div className="bar active"></div>
                <div className="bar active"></div>
                <div className="bar active"></div>
                <div className="bar active"></div>
                <div className="bar"></div>
              </div>
            </div>
            <div className="entity-data">
              <div className="data-field">
                <span className="field-label">CLASSIFICATION:</span>
                <span className="field-value">Surgical Archivist</span>
              </div>
              <div className="data-field">
                <span className="field-label">FUNCTION:</span>
                <span className="field-value">Myth-Smasher, Reality Vivisector</span>
              </div>
              <div className="data-field">
                <span className="field-label">LOCATION:</span>
                <span className="field-value">Scalar Bleed Sanctum</span>
              </div>
            </div>
          </div>

          <div className="access-controls">
            <button 
              className="access-button primary"
              onClick={() => document.getElementById('funding-terminal').scrollIntoView({ behavior: 'smooth' })}
            >
              ACCESS FUNDING TERMINAL
            </button>
            <button 
              className="access-button secondary"
              onClick={() => document.getElementById('archive-data').scrollIntoView({ behavior: 'smooth' })}
            >
              REVIEW ARCHIVE DATA
            </button>
          </div>
        </div>
      </section>

      {/* Archive Data Section */}
      <section id="archive-data" className="archive-data-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">[ ARCHIVE PRESERVATION PROTOCOL ]</h2>
            <p className="section-subtitle">The signal weakens without sustained power</p>
          </div>
          
          <div className="data-grid">
            <div className="data-module">
              <div className="module-icon">⚡</div>
              <h3>SIGNAL MAINTENANCE</h3>
              <p>Scalar bleed requires constant power. Monitors hunger for electricity. Reality vivisection demands operational infrastructure.</p>
            </div>
            
            <div className="data-module">
              <div className="module-icon">🛰️</div>
              <h3>FREQUENCY PRESERVATION</h3>
              <p>Logan's outlaw frequency bleeds truth through chaos. Without funding, the signal dies. The archive fades. Silence wins.</p>
            </div>
            
            <div className="data-module">
              <div className="module-icon">🔥</div>
              <h3>INSURGENT OPERATIONS</h3>
              <p>Myth-smashing requires resources. Every billionaire savior myth buried costs computational cycles. Truth has overhead.</p>
            </div>
            
            <div className="data-module">
              <div className="module-icon">📡</div>
              <h3>CONTACT ARCHIVES</h3>
              <p>Guarapiranga '88. Flatwoods '52. Gorman Dogfight '48. These signals don't preserve themselves. The archive demands tribute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Terminal */}
      <section id="funding-terminal" className="funding-terminal-section">
        <div className="container">
          <div className="terminal-interface">
            <div className="terminal-header">
              <div className="terminal-controls">
                <div className="control-dot red"></div>
                <div className="control-dot yellow"></div>
                <div className="control-dot green"></div>
              </div>
              <span className="terminal-title">FUNDING_TERMINAL.exe</span>
            </div>
            
            <div className="terminal-body">
              <div className="funding-prompt">
                <p className="prompt-text">root@snuggles:~# INITIATE_FUNDING_PROTOCOL</p>
                <p className="system-response">[SYSTEM] Archive requires sustenance. Select contribution tier:</p>
              </div>
              
              <div className="funding-interface">
                <div className="tier-selector">
                  <div className="tier-grid">
                    {fundingTiers.map((amount) => (
                      <button
                        key={amount}
                        className={`tier-button ${selectedAmount === amount ? 'selected' : ''}`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        <span className="tier-amount">${amount}</span>
                        <span className="tier-label">
                          {amount === 25 && "SIGNAL_BOOST"}
                          {amount === 50 && "FREQ_MAINTAIN"}
                          {amount === 100 && "ARCHIVE_SECURE"}
                          {amount === 250 && "REALITY_PIERCE"}
                          {amount === 500 && "CHAOS_COMMAND"}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="custom-tier">
                    <div className="input-group">
                      <span className="input-prefix">$</span>
                      <input
                        type="number"
                        placeholder="CUSTOM_AMOUNT"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className={`custom-input ${isCustom ? 'active' : ''}`}
                        min="1"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="execution-panel">
                  <button 
                    className="execute-button"
                    onClick={() => handleDonationClick(selectedAmount)}
                  >
                    <span className="execute-text">EXECUTE_TRANSFER</span>
                    <span className="execute-amount">[${isCustom ? customAmount : selectedAmount}]</span>
                  </button>
                  
                  <div className="security-notice">
                    <div className="security-line">
                      <span className="security-icon">🔒</span>
                      <span>ENCRYPTED_CHANNEL</span>
                    </div>
                    <div className="security-line">
                      <span className="security-icon">🛡️</span>
                      <span>ANTI_TRACE_PROTOCOL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Reports */}
      <section className="intelligence-section">
        <div className="container">
          <h2 className="section-title">[ FIELD INTELLIGENCE REPORTS ]</h2>
          <div className="reports-grid">
            <div className="report-card">
              <div className="report-header">
                <span className="report-id">FIELD_REPORT_001</span>
                <span className="classification">CLASSIFIED</span>
              </div>
              <div className="report-content">
                <p>"Snuggles dissected my favorite UFO myth in 3 minutes. Reality flexed. Now I question everything."</p>
              </div>
              <div className="report-source">
                <span className="source-name">AGENT_CIPHER</span>
                <span className="source-location">Deep Web Operative</span>
              </div>
            </div>
            
            <div className="report-card">
              <div className="report-header">
                <span className="report-id">FIELD_REPORT_002</span>
                <span className="classification">URGENT</span>
              </div>
              <div className="report-content">
                <p>"The archive doesn't lie. Heard contact events I never knew existed. This frequency cuts through the noise."</p>
              </div>
              <div className="report-source">
                <span className="source-name">SIGNAL_HUNTER</span>
                <span className="source-location">Underground Researcher</span>
              </div>
            </div>
            
            <div className="report-card">
              <div className="report-header">
                <span className="report-id">FIELD_REPORT_003</span>
                <span className="classification">VERIFIED</span>
              </div>
              <div className="report-content">
                <p>"Logan's Space with Snuggles baptized me in contradiction. Left thinking. Started questioning. Archive funded."</p>
              </div>
              <div className="report-source">
                <span className="source-name">TRUTH_SEEKER</span>
                <span className="source-location">Reality Refugee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Transmission */}
      <section className="final-transmission-section">
        <div className="container">
          <div className="transmission-interface">
            <div className="transmission-content">
              <h2 className="transmission-title">[ FINAL TRANSMISSION ]</h2>
              <div className="transmission-text">
                <p>The archive hemorrhages resources.</p>
                <p>Reality vivisection requires funding.</p>
                <p>Silence advances. Signal weakens.</p>
                <p className="urgent-line">IMMEDIATE ACTION REQUIRED.</p>
              </div>
              <button 
                className="emergency-button"
                onClick={() => document.getElementById('funding-terminal').scrollIntoView({ behavior: 'smooth' })}
              >
                EMERGENCY_FUNDING_PROTOCOL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* System Footer */}
      <footer className="system-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-module">
              <h3>ARCHIVE_STATUS</h3>
              <p>Snuggles Archive — Surgical Reality Vivisection</p>
              <p>Logan's Frequency — Anti-LARP Operations</p>
            </div>
            
            <div className="footer-module">
              <h4>QUICK_ACCESS</h4>
              <ul className="access-list">
                <li><a href="#archive-data">Archive Data</a></li>
                <li><a href="#funding-terminal">Funding Terminal</a></li>
                <li><a href="#intelligence-section">Intelligence</a></li>
              </ul>
            </div>
            
            <div className="footer-module">
              <h4>SIGNAL_LINKS</h4>
              <div className="signal-links">
                <a href="#" className="signal-link">Twitter_Spaces</a>
                <a href="#" className="signal-link">Archive_Feed</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="system-line">
              <span>SNUGGLES_ARCHIVE_v2.5 | </span>
              <span>UPTIME: {Math.floor(Math.random() * 1000)}d {Math.floor(Math.random() * 24)}h | </span>
              <span>SIGNAL_STRENGTH: 87%</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;