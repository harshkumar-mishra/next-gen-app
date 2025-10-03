import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./footer";
import Technology from "./Technology";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const trustRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (trustRef.current) observer.observe(trustRef.current);

    return () => {
      if (trustRef.current) observer.unobserve(trustRef.current);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              {/* Navbar */}
              <header className="navbar">
                <div className="logo">
                  <Link to="/">
                    Next <span>Gen</span>
                  </Link>
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

              {/* Hero Section */}
              <main>
                <section className="hero">
                  <div className="chip">EQT</div>
                  <h1>Verify to Trust AI</h1>
                  <p>Introducing Verifiable Compute. Ready for the Agentic AI Era.</p>
                  <button className="demo-btn">Schedule Demo</button>

                  <div className="preorders">
                    <p>Preorders Q4 Ship 2025</p>
                    <div className="cards">
                      <div className="card">Dell Appliance</div>
                      <div className="card">Cloud Provider</div>
                      <div className="card">Accenture AI Platform</div>
                    </div>
                  </div>
                </section>

                {/* Floating Dots Section */}
                <section className="solutions-section">
                  <div className="floating-dots">
                    {Array.from({ length: 100 }, (_, i) => (
                      <span key={i} className="dot" />
                    ))}
                  </div>
                  <div className="solutions-content">
                    <span className="solutions-chip">Solutions</span>
                    <h2 className="solutions-title">
                      Evolving trust for <br />
                      <span className="highlight">AI with</span>
                    </h2>
                  </div>
                </section>

                {/* Trust Section */}
                <section
                  ref={trustRef}
                  className={`trust-section ${isVisible ? "visible" : ""}`}
                >
                  <div className="trust-item">
                    <div className="circle-indicator" />
                    <div className="text">
                      <h3>AI Training and Inference</h3>
                      <p>Proof AI deployments are untampered</p>
                    </div>
                  </div>

                  <div className="trust-item">
                    <div className="circle-indicator active" />
                    <div className="text">
                      <h3>AI Privacy</h3>
                      <p>Proof AI models and data are confidential</p>
                    </div>
                  </div>

                  <div className="trust-item">
                    <div className="circle-indicator" />
                    <div className="text">
                      <h3>AI Safeguards</h3>
                      <p>Proof AI guardrails are implemented</p>
                    </div>
                  </div>
                </section>
              </main>

              <Footer />
            </div>
          }
        />

        {/* Technology Page */}
        <Route path="/service" element={<Service />} /> 
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
