import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        🐾 <span className="logo-text">PetVora</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dogs">Dogs</Link></li>
        <li><Link to="/cats">Cats</Link></li>
        <li><Link to="/rabbits">Rabbits</Link></li>
        <li><Link to="/birds">Birds</Link></li>
        <li><Link to="/hamster">Hamster</Link></li>
        <li><Link to="/horse">Horse</Link></li>       
        <li><Link to="/turtile">Turtile</Link></li>     
        <li><Link to="/fish">Fish</Link></li>      
        <li><Link to="/tips">Tips</Link></li>
        <li><Link to="TipDetail">TipDetail</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <Link to="/login" className="btn login-btn">Login</Link>
        <Link to="/register" className="btn register-btn">Register</Link>
      </div>
    </nav>
  );
}
