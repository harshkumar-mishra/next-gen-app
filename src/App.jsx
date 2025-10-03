// import React from "react";
// import "./App.css";

// export default function App() {
//   return (
//     <div className="app">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">EQT <span>LAB</span></div>
        
//         {/* Right side menu + buttons */}
//         <div className="nav-right">
//           <ul className="nav-links">
//             <li>Overview</li>
//             <li>Technology</li>
//             <li>Testimonials</li>
//             <li>Resources</li>
//           </ul>
//           <div className="nav-actions">
//             <button className="login-btn">Log In</button>
//             <button className="start-btn">Get Started</button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="hero">
//         <div className="chip">EQT</div>
//         <h1>Verify to Trust AI</h1>
//         <p>
//           Introducing Verifiable Compute. Ready for the Agentic AI Era.
//         </p>
//         <button className="demo-btn">Schedule Demo</button>

//         {/* Preorder Section */}
//         <div className="preorders">
//           <p>Preorders Q4 Ship 2025</p>
//           <div className="cards">
//             <div className="card">Dell Appliance</div>
//             <div className="card">Cloud Provider</div>
//             <div className="card">Accenture AI Platform</div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./footer";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const trustRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (trustRef.current) {
      observer.observe(trustRef.current);
    }

    return () => {
      if (trustRef.current) {
        observer.unobserve(trustRef.current);
      }
    };
  }, []);

  return (
    <div className="app">
      <section className="main-section">
        {/* Navbar */}
        <div className="navbar">
          <div className="logo">
            EQT <span>LAB</span>
          </div>

          <div className="nav-right">
            <ul className="nav-links">
              <li>Overview</li>
              <li>Technology</li>
              <li>Testimonials</li>
              <li>Resources</li>
            </ul>
            <div className="nav-actions">
              <button className="login-btn">Log In</button>
              <button className="start-btn">Get Started</button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero">
          <div className="chip">EQT</div>
          <h1>Verify to Trust AI</h1>
          <p>Introducing Verifiable Compute. Ready for the Agentic AI Era.</p>
          <button className="demo-btn">Schedule Demo</button>

          {/* Preorder Section */}
          <div className="preorders">
            <p>Preorders Q4 Ship 2025</p>
            <div className="cards">
              <div className="card">Dell Appliance</div>
              <div className="card">Cloud Provider</div>
              <div className="card">Accenture AI Platform</div>
            </div>
          </div>
        </div>

        {/* Floating Dots Animated Solutions Section */}
        <div className="solutions-section">
          <div className="floating-dots">
            {[...Array(100)].map((_, i) => (
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
        </div>

        {/* Trust Section: Fades In on Scroll */}
        <div
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
        </div>

        {/* Footer */}
        <Footer />
      </section>
    </div>
  );
}




