import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ email: "", password: "" });

    let newErrors = {};
    let hasError = false;

    if (!email) {
      newErrors.email = "Email is required";
      hasError = true;
    }
    if (!password) {
      newErrors.password = "Password is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    const data = await login(email, password);
    console.log(data);

    if (data.message === 'Login successful!') {
      console.log("Login successful:", data);
      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        if (onLoginSuccess) onLoginSuccess();
        console.log("Navigating to dashboard");
        // ✅ must match route path
      });
    } else {
      console.log("Login failed:", data);
      Swal.fire({
        title: "Error!",
        text: data.message || "Login failed",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <h1>Welcome Back</h1>
        <p>Access your account securely and manage your preferences anytime.</p>
      </div>
      <div className="right-side">
        <div className="formSection">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

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
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </div>
            </div>

            <div className="remember-me">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            <p className="don">
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


