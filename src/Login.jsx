// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import "./App.css";

// function Login({ onLoginSuccess }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({ email: "", password: "" });

//   const navigate = useNavigate();

//   const login = async (email, password) => {
//     const response = await fetch("http://localhost:3000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
//     return await response.json();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset errors
//     setErrors({ email: "", password: "" });

//     let newErrors = {};
//     let hasError = false;

//     if (!email) {
//       newErrors.email = "Email is required";
//       hasError = true;
//     }
//     if (!password) {
//       newErrors.password = "Password is required";
//       hasError = true;
//     }

//     if (hasError) {
//       setErrors(newErrors);
//       return;
//     }

//     const data = await login(email, password);
//     console.log(data);

//     if (data.message === 'Login successful!') {
//       console.log("Login successful:", data);
//       Swal.fire({
//         title: "Success!",
//         text: data.message,
//         icon: "success",
//         confirmButtonText: "OK",
//       }).then(() => {
//         if (onLoginSuccess) onLoginSuccess();
//         console.log("Navigating to dashboard");
//         // ✅ must match route path
//       });
//     } else {
//       console.log("Login failed:", data);
//       Swal.fire({
//         title: "Error!",
//         text: data.message || "Login failed",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   return (
//     <div className="container">
      
//       <div className="left-side">
//         <h1>Welcome Back</h1>
//         <p>Access your account securely and manage your preferences anytime.</p>
//       </div>
//       <div className="right-side">
//         <div className="formSection">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//             </div>

//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <div className="password-wrapper">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <span
//                   className="eye-icon"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//                 {errors.password && (
//                   <p style={{ color: "red" }}>{errors.password}</p>
//                 )}
//               </div>
//             </div>

//             <div className="remember-me">
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={() => setRememberMe(!rememberMe)}
//                 />
//                 Remember me
//               </label>
//               <a href="#" className="forgot-password">
//                 Forgot password?
//               </a>
//             </div>

//             <button type="submit" className="login-button">
//               Login
//             </button>

//             <p className="don">
//               Don't have an account? <a href="#">Sign Up</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom"; // ✅ added Link import
import "./Login.css";
import Footer from "./footer";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  // ✅ Login API function
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      return await response.json();
    } catch (error) {
      console.error("Error during login:", error);
      return { message: "Something went wrong. Please try again." };
    }
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });
    const newErrors = {};

    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const data = await login(email, password);
    console.log(data);

    if (data.message === "Login successful!") {
      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        if (onLoginSuccess) onLoginSuccess();
        navigate("/dashboard"); // ✅ navigate to dashboard after login
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: data.message || "Login failed. Please check your credentials.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
    <div className="container">
      {/* ✅ Navbar */}
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
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className="nav-actions">
            <button className="login-btn">Log In</button>
            <button className="start-btn">Get Started</button>
          </div>
        </nav>
      </header>

      {/* ✅ Page Layout */}
      <div className="left-side">
        <h1>Welcome Back</h1>
        <p>Access your account securely and manage your preferences anytime.</p>
      </div>

      <div className="right-side">
        <div className="formSection">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>

            {/* Remember Me */}
            <div className="remember-me">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button type="submit" className="login-button">
              Login
            </button>

            <p className="don">
              Don’t have an account? <Link to="#">Sign Up</Link>
            </p>
          </form>
        </div>
       
      </div>
      
    </div>
    <Footer />
    </>
  );
}

export default Login;
