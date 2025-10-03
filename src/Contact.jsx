import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure that Link is imported correctly
import './Contact.css';
import Footer from './footer'; // Ensure Footer is being correctly imported

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send data to an API)
  };

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

      <div className="container">
        {/* Left Section: Message */}
        <div className="left-section">
          <h1>Let’s Get In Touch.</h1>
          <p>Or just reach out manually to <a href="mailto:hello@slothui.com">hello@slothui.com</a>.</p>
        </div>

        {/* Right Section: Form */}
        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name..."
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address..."
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+44 (000) 000-0000"
              required
            />
            
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your main text here..."
              maxLength="300"
              required
            ></textarea>

            <div className="terms">
              <input
                type="checkbox"
                id="terms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="terms">
                I hereby agree to our <a href="#">Privacy Policy</a> terms.
              </label>
            </div>

            <button type="submit" className="submit-btn">Submit Form</button>
          </form>
        </div>
      </div>

      <Footer /> {/* Ensure that the Footer component is added here */}
    </div>
  );
}

export default Contact;
