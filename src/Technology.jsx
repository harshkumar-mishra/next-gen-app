import React from "react";
import { Link } from "react-router-dom"; // Missing import
import "./Technology.css"; // External CSS
import { Shield, Smartphone } from "lucide-react";
import Footer from "./footer";

export default function Technology() {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <Link to="/">Next <span>Gen</span></Link>
        </div>

        <nav className="nav-right">
          <ul className="nav-links">
            <li><a href="#overview">Overview</a></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#resources">About</a></li>

            <li>
              <Link to="/contact">Contact Us</Link>
              </li>
          </ul>

          <div className="nav-actions">
            <button className="login-btn">Log In</button>
            <button className="start-btn">Get Started</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Protect your data with <br />
          <span className="highlight">next-generation AI</span>
        </h1>
        <p>
          Our AI-powered cybersecurity system identifies and neutralizes threats
          in real time, protecting personal and corporate data.
        </p>
        <button className="launch-btn">Launch app</button>
      </section>

      {/* Stats + Phone */}
      <section className="stats-section">
        {/* Left Cards */}
        <div className="stats-left">
          <div className="stat-card">
            <p>Prevented attacks</p>
            <h2>172</h2>
            <span className="positive">+11.5%</span>
          </div>
          <div className="stat-card">
            <p>Alerts</p>
            <h4>Critical: 41%</h4>
            <h4>High: 36%</h4>
            <h4>Low: 23%</h4>
          </div>
        </div>

        {/* Phone */}
        <div className="phone-mockup">
          <Smartphone className="phone-icon" />
          <h2 className="phone-score">80.9</h2>
          <p>Data Security Score</p>
          <div className="phone-stats">
            <div>
              <p>New threats</p>
              <span>136</span>
            </div>
            <div>
              <p>Prevented attacks</p>
              <span>32</span>
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="stats-right">
          <div className="stat-card">
            <p>Top 3 Alerts</p>
            <ul>
              <li>⚠️ Multi-stage attack</li>
              <li>⚠️ Phishing threats</li>
              <li>⚠️ API abuse data mesh</li>
            </ul>
          </div>
          <div className="stat-card">
            <p>Remediated detections</p>
            <h2>73</h2>
            <span className="positive">+18.7%</span>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="trusted">
        <span>Discord</span>
        <span>Loom</span>
        <span>Miro</span>
        <span>Shopify</span>
        <span>CultureAmp</span>
        <span>Atlassian</span>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <Shield className="choose-icon" />
        <h2>Why choose us?</h2>
        <p>
          The ultimate tool for those who value security, innovation, and
          reliability.
        </p>
      </section>
       <header className="app-header">
        <h1>All your security tools in one place</h1>
        <p>
          Our app analyzes vulnerabilities and integrates your defenses, bringing you one step ahead of cyber threats.
        </p>
      </header>

      <section className="features">
        <div className="feature">
          <div className="icon-container">
            <div className="icon ai-icon"></div>
          </div>
          <p className="feature-text">AI for absolute security</p>
          <p className="feature-detail">
            Our dynamic AI analyzes vulnerabilities and detects threats in real-time.
          </p>
        </div>

        <div className="feature">
          <div className="icon-container">
            <div className="icon guarantee-icon"></div>
          </div>
          <p className="feature-text">100% Security Guarantee</p>
          <p className="feature-detail">
            A proprietary system that guarantees zero threat penetration.
          </p>
        </div>

        <div className="feature">
          <div className="icon-container">
            <div className="icon alerts-icon"></div>
          </div>
          <p className="feature-text">Instant threat alerts</p>
          <p className="feature-detail">
            Receive immediate notifications about potential threats.
          </p>
        </div>

        <div className="feature">
          <div className="icon-container">
            <div className="icon data-icon"></div>
          </div>
          <p className="feature-text">Data security</p>
          <p className="feature-detail">
            Ensuring 24/7 data protection with the latest encryption standards.
          </p>
        </div>

        <div className="feature">
          <div className="icon-container">
            <div className="icon encryption-icon"></div>
          </div>
          <p className="feature-text">Military-grade encryption</p>
          <p className="feature-detail">
            Protecting your data with military-level encryption standards.
          </p>
        </div>
 
      </section>
      <section class="customer-feedback">
  <h2>What our customers say about us</h2>
  <div class="feedback-container">
    <div class="feedback">
      <p>"Great AI-powered security!"</p>
      <p>- John D. Smith</p>
    </div>
    <div class="feedback">
      <p>"Instant alerts and easy to use!"</p>
      <p>- Sarah L.</p>
    </div>
    <div class="feedback">
      <p>"The best protection I’ve ever had!"</p>
      <p>- Mark T.</p>
    </div>
  </div>
</section>

     

      {/* Footer */}
      <Footer />
    </div>
  );
}
