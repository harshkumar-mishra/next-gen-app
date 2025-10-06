// import React, { useState } from "react";
// import "./Register.css";

// export default function DemoPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     company: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Demo request submitted!");
//   };

//   return (
    
//     <div className="demo-container">
        
//       {/* Left Section */}
//       <div className="demo-left">
//         <h2>
//           Get a personalized <br />
//           <span>30-minute demo of Procol</span>
//         </h2>

//         <ul>
//           <li>Complicated, Uncustomisable Legacy/ERP systems come with high adoption costs</li>
//           <li>Complicated, Uncustomisable Legacy/ERP systems</li>
//           <li>Complicated, Uncustomisable Legacy/ERP systems come with</li>
//           <li>Complicated, Uncustomisable Legacy/ERP systems</li>
//         </ul>

//         <div className="trusted">
//           <p>Trusted By Global Brands</p>
//           <div className="brand-logos">
//             <img src="https://logo.clearbit.com/blinkit.com" alt="Blinkit" />
//             <img src="https://logo.clearbit.com/bigbasket.com" alt="BigBasket" />
//             <img src="https://logo.clearbit.com/havells.com" alt="Havells" />
//             <img src="https://logo.clearbit.com/hersheys.com" alt="Hershey" />
//           </div>
//         </div>

//         <div className="testimonial">
//           <p>
//             “I think Procol is the best product on the market. We evaluated a few
//             solutions but liked that it was the fastest and cost-efficient to set
//             up across all our geographies.”
//           </p>
//           <h4>— Nisheeth Jain</h4>
//           <p className="position">Finance Team, More Retail Limited</p>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="demo-right">
//         <h3>Schedule a Demo</h3>
//         <p>
//           Learn about our product with a live demonstration and have your
//           questions answered by one of our experts.
//         </p>

//         <form onSubmit={handleSubmit}>
//           <label>
//             Name *
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Phone number *
//             <div className="phone-input">
//               <span>+91</span>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter your number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </label>

//           <label>
//             Work Email *
//             <input
//               type="email"
//               name="email"
//               placeholder="you@company.com"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Company Name *
//             <input
//               type="text"
//               name="company"
//               placeholder="Enter your company name"
//               value={formData.company}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <button className="submit" type="submit">Get started</button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom"; // import Link
import "./Register.css";
import Footer from "./footer";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo request submitted!");
  };

  return (
    <>
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
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className="nav-actions">
            <button className="login-btn">Log In</button>
            <button className="start-btn">Get Started</button>
          </div>
        </nav>
      </header>

      {/* Demo Section */}
      <div className="demo-container">
        {/* Left Section */}
        <div className="demo-left">
          <h2>
            Get a personalized <br />
            <span>30-minute demo of Procol</span>
          </h2>

          <ul>
            <li>Complicated, Uncustomisable Legacy/ERP systems come with high adoption costs</li>
            <li>Complicated, Uncustomisable Legacy/ERP systems</li>
            <li>Complicated, Uncustomisable Legacy/ERP systems come with</li>
            <li>Complicated, Uncustomisable Legacy/ERP systems</li>
          </ul>

          <div className="trusted">
            <p>Trusted By Global Brands</p>
            <div className="brand-logos">
              <img src="https://logo.clearbit.com/blinkit.com" alt="Blinkit" />
              <img src="https://logo.clearbit.com/bigbasket.com" alt="BigBasket" />
              <img src="https://logo.clearbit.com/havells.com" alt="Havells" />
              <img src="https://logo.clearbit.com/hersheys.com" alt="Hershey" />
            </div>
          </div>

          <div className="testimonial">
            <p>
              “I think Procol is the best product on the market. We evaluated a few
              solutions but liked that it was the fastest and cost-efficient to set
              up across all our geographies.”
            </p>
            <h4>— Nisheeth Jain</h4>
            <p className="position">Finance Team, More Retail Limited</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="demo-right">
          <h3>Schedule a Demo</h3>
          <p>
            Learn about our product with a live demonstration and have your
            questions answered by one of our experts.
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              Name *
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone number *
              <div className="phone-input">
                <span>+91</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>

            <label>
              Work Email *
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Company Name *
              <input
                type="text"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </label>

            <button className="submit" type="submit">Get started</button>
          </form>
         
        </div>
      
      </div>
        <Footer />
    </>
  );
}
