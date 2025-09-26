import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const pets = [
    { name: "Dog", img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=60", route: "/dogs" },
    { name: "Cat", img: "https://www.rover.com/blog/wp-content/uploads/iStock-1312755696-960x540.jpg", route: "/cats" },
    { name: "Bird", img: "https://sniffingouthome.org/wp-content/uploads/2010/08/p1010349.jpg", route: "/birds" },
    { name: "Rabbit", img: "https://media.istockphoto.com/id/506853536/photo/two-rabbits.jpg?s=612x612&w=0&k=20&c=Gf2lpg_WZt7jJhSs86K2qoZWhjLnC4vQoR6weIXpmko=", route: "/rabbits" },
    { name: "Hamster", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQonEY_tQomVDLO_-L26OglkOx0ZiMmptK4vQ&s", route: "/Hamster" },
    { name: "Turtile", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeMOSYReoTaCrOdFlHr2bwk3T_lWCyxvXog&s", route: "/Turtile" },
    { name: "Fish", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq00uXqOWNZb9Hcc-i0DPZk7MRQRyzxNV-3g&s", route: "/Fish" },
    { name: "Horse", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7_XXjNzm-cbkAHeneQJUAoYZ_ZeEGrWsFQ&s", route: "/Horse" },
  ];

  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        {/* Left Text */}
        <div className="hero-text">
          <h1>A Forever Family For Pets In Need 🐾</h1>
          <p>
            Love has no breed. Adopting a pet is not only a wonderful way to bring joy into your life, it’s also a chance to save a life.
          </p>
          <p>
            Find your fur-ever loyal companion and bring home sheer happiness – Adopt today!
          </p>
          <p>
            Start your search for companionship now. Within a few clicks, you’ll be one step closer to finding a lovable pet to make memories with!
          </p>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src="https://img.freepik.com/free-vector/adopt-pet-concept_23-2148523582.jpg"
            alt="Adopt a Pet"
          />
        </div>
      </div>

      {/* Pets Section */}
      <section className="pets-section">
        <h2>Types of Pets</h2>
        <div className="pets-grid">
          {pets.map((pet) => (
            <div
              key={pet.name}
              onClick={() => navigate(pet.route)}
              className="pet-card"
            >
              <img src={pet.img} alt={pet.name} />
              <h3>{pet.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

