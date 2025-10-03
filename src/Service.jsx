import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Service.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <Link to="/">Next <span className="gen">Gen</span></Link>
        </div>

        <nav className="nav-right">
          <ul className="nav-links">
            <li><a href="#overview">Overview</a></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>

          <div className="nav-actions">
            <button className="login-btn">Log In</button>
            <button className="start-btn">Get Started</button>
          </div>
        </nav>
      </header>

      {/* Cards Section */}
      <div className="card">
        <div className="icon ai-icon">
          <span></span>
        </div>
        <h3>AI for absolute security</h3>
        <p>Our platform utilizes the latest AI algorithms to predict threats.</p>
      </div>

      <div className="card">
        <div className="icon guarantee-icon">
          <span></span>
        </div>
        <h3>Security Guarantee</h3>
        <p>AI encryption keeps your data safe.</p>
      </div>

      <div className="card">
        <div className="alert">
          <p>Potential threat detected!</p>
          <span>34m ago</span>
        </div>
        <h3>Instant threat alerts</h3>
        <p>AI detects threats and notifies you immediately to protect your data.</p>
      </div>

      <div className="card">
        <div className="speedometer">
          <p>170 km/h</p>
        </div>
        <h3>React faster than hackers</h3>
        <p>Get alerts on threats and prevent them before they cause damage.</p>
      </div>

      <div className="card">
        <div className="score">
          <p>80.9</p>
        </div>
        <h3>Real-time monitoring</h3>
        <p>Track activity and get security analytics 24/7.</p>
      </div>

      <div className="card">
        <div className="shield-icon">
          <span>🛡️</span>
        </div>
        <h3>Military-grade encryption</h3>
        <p>Your data is protected by technology that meets global security standards.</p>
      </div>
    </div>
  );
};

export default App;
