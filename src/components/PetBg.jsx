import React from "react";
import { useNavigate } from "react-router-dom";
import "./PetBg.css";

function PetBg() {
    const navigate = useNavigate();

    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Find Your New Best Friend</h1>
                <p>Adopt a loving pet today</p>
                <button onClick={() => navigate("/home")}>Get Started</button>
            </div>
        </div>
    );
}

export default PetBg;
