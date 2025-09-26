import React from "react";
import "./FeaturedPets.css";

function FeaturedPets() {
    return (
        <section id="adopt" className="featured">
            <h2>Featured Pets</h2>
            <div className="pet-list">
                <div className="pet-card">
                    <img src="https://placedog.net/400/300?id=1" alt="Dog 1" />
                    <h3>Buddy</h3>
                    <p>2 years old, Friendly</p>
                    <button className="adopt-btn">Adopt Me</button>
                </div>
                <div className="pet-card">
                    <img src="https://placekitten.com/400/300" alt="Cat 1" />
                    <h3>Mittens</h3>
                    <p>1 year old, Playful</p>
                    <button className="adopt-btn">Adopt Me</button>
                </div>
                <div className="pet-card">
                    <img src="https://placedog.net/400/300?id=2" alt="Dog 2" />
                    <h3>Charlie</h3>
                    <p>3 years old, Loyal</p>
                    <button className="adopt-btn">Adopt Me</button>
                </div>
            </div>
        </section>
    );
}

export default FeaturedPets;
