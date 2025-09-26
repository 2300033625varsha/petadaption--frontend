import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // external styling

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:9192/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // ✅ backend expects email + password
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Invalid email or password");
      }

      // ✅ store user info if needed
      localStorage.setItem("user", JSON.stringify(data));

      setSuccess(data.message || "Login successful!");

      // redirect after success
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <h1>Welcome to PetVora</h1>
        <p>
          Discover loving pets waiting for their forever homes.  
          Sign in to explore adoption tips, volunteer opportunities, and more.
        </p>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <h2>User Login</h2>

        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
