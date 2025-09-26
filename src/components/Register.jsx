import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showAbout, setShowAbout] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }), // ✅ backend expects these
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Registration failed. Try again.");
      }

      setSuccess(data.message || "Registration successful!");

      // ✅ redirect to login after success
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        {/* Left Side */}
        <div className="register-left">
          <h2>Join Us</h2>
          <p>
            Find your new best friend and give a loving home to a pet in need.
          </p>
          <button
            className="about-btn"
            onClick={() => setShowAbout(!showAbout)}
          >
            About Us
          </button>

          {showAbout && (
            <div className="about-box">
              <p>
                🐾 Welcome to our Pet Adoption Platform! <br />
                We connect families with lovable pets in need of a forever home. <br />
                Adopt today and change a life!
              </p>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="register-right">
          <h2>Register Here</h2>

          {error && <p className="error-msg">{error}</p>}
          {success && <p className="success-msg">{success}</p>}

          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
