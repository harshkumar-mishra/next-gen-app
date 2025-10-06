import React from "react";
import { Link } from "react-router-dom"; // Importing Link component
import "./App.css";
import Footer from "./footer";

function About() {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <Link to="/">Next <span>Gen</span></Link>
        </div>

        <nav className="nav-right">
          <ul className="nav-links">
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/technology">Technology</Link></li>
                              <li><Link to="/service">Testimonials</Link></li>
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/contact">Contact Us</Link> </li>
                              </ul>

          <div className="nav-actions">
            <button className="login-btn">Log In</button>
            <button className="start-btn">Get Started</button>
          </div>
        </nav>
      </header>

      {/* About Section */}
      <section className="section">
        <div className="subsection">
          <h2 className="sub-title">Built for What Matters</h2>
          <p className="description">
            Constellation began with a clear observation: modern professionals are drowning in tools but starving for clarity.
            Every day, countless hours are spent switching between platforms, logging tasks, and analyzing reports — yet the bigger picture often remains hidden.
            <br />
            Productivity isn't about doing more — it's about doing what matters most. Constellation was created to help professionals connect the dots, turning raw data into meaningful patterns and clear next steps.
            Today, it empowers over 10,000+ users across 30+ industries to align their work with their goals — with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Compass Section */}
      <section className="section">
        <h2 className="sub-title">The Compass That Guides Us</h2>
        <p className="description">
          We help individuals and teams work smarter by transforming scattered data into clarity — turning complexity into direction and everyday effort into meaningful progress.
        </p>
        <div className="compass-section">
          <div className="compass-item">
            <h3 className="compass-title">Empowered Decisions</h3>
            <p className="compass-description">
              We guide, not dictate—helping you make confident, informed choices that fit your unique path.
            </p>
          </div>
          <div className="compass-item">
            <h3 className="compass-title">Clarity in Action</h3>
            <p className="compass-description">
              We simplify complexity by turning scattered data into insights you can understand and use right away.
            </p>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default About;
