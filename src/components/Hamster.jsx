import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hamster() {
  const navigate = useNavigate();
  const [selectedHamster, setSelectedHamster] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const hamsters = [
    {
      name: "Nibbles",
      img: "https://www.thesprucepets.com/thmb/z_VBKtkEy6NwgoY-YFyIhk_sC6U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-140212719-56a2bd493df78cf7727964af.jpg",
      desc: "Tiny and curious, loves exploring tunnels and nibbling snacks.",
      activities: ["Enjoys running in wheel", "Loves sunflower seeds", "Very playful"],
      contact: {
        phone: "+91 91234 40001",
        email: "nibbles.adopt@petadopt.org",
        location: "Delhi, India",
      },
    },
    {
      name: "Peanut",
      img: "https://www.thesprucepets.com/thmb/829li2JHf6Ikox8Ykcwz1TIPHAc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spruce-pets-campbell-dwarf-hamster-62b1314fb7c542a68cfda8e0fb39846d.jpg",
      desc: "Gentle and sweet, loves to be held and cuddled.",
      activities: ["Sleeps in soft bedding", "Friendly with kids", "Likes gentle cuddles"],
      contact: {
        phone: "+91 91234 40002",
        email: "peanut.adopt@petadopt.org",
        location: "Mumbai, India",
      },
    },
    {
      name: "Coco",
      img: "https://www.thesprucepets.com/thmb/7E0i-8V0W2YXgTJ30mKjJxj0TVw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spruce-pets-syrian-hamster-420d5b323727497192205ff3724e6ed5.jpg",
      desc: "Energetic little hamster with a love for running.",
      activities: ["Zooms around cage", "Loves exercise wheel", "Always curious"],
      contact: {
        phone: "+91 91234 40003",
        email: "coco.adopt@petadopt.org",
        location: "Hyderabad, India",
      },
    },
    {
      name: "Pumpkin",
      img: "https://www.thesprucepets.com/thmb/EVG2ifKtbwbUm7GXb_p74ruiQzk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dwarf-winter-white-russian-hamster-764550b3a42348288043632308ad11dd.jpg",
      desc: "Cute and chubby hamster who enjoys tasty treats.",
      activities: ["Chews on wooden toys", "Loves carrots", "Builds cozy nests"],
      contact: {
        phone: "+91 91234 40004",
        email: "pumpkin.adopt@petadopt.org",
        location: "Chennai, India",
      },
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#242424",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 50px",
          backgroundColor: "rgba(0,0,0,0.8)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <h2 style={{ margin: 0, cursor: "pointer" }} onClick={() => navigate("/")}>
          🐾 PetAdopt
        </h2>
        <button
          onClick={() => navigate("/home")}
          style={{
            background: "none",
            border: "1px solid white",
            color: "white",
            padding: "5px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Home
        </button>
      </nav>

      {/* Hamsters Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px" }}>Adopt a Hamster 🐹</h1>
        <p style={{ marginBottom: "30px", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
          These adorable hamsters are waiting for a loving home ❤
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginTop: "40px",
          }}
        >
          {hamsters.map((hamster) => (
            <div
              key={hamster.name}
              style={{
                backgroundColor: "#2a2a2a",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                textAlign: "center",
              }}
            >
              <img
                src={hamster.img}
                alt={hamster.name}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <h3 style={{ margin: "10px 0" }}>{hamster.name}</h3>
              <p style={{ padding: "0 10px 20px 10px", fontSize: "1rem" }}>{hamster.desc}</p>
              <button
                style={{
                  margin: "15px 0",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#ff6f61",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSelectedHamster(hamster);
                  setShowContact(false);
                }}
              >
                Adopt Me
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedHamster && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              color: "#000",
              borderRadius: "15px",
              padding: "30px",
              width: "400px",
              maxHeight: "80vh",
              overflowY: "auto",
              textAlign: "center",
            }}
          >
            <img
              src={selectedHamster.img}
              alt={selectedHamster.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h2>{selectedHamster.name}</h2>
            <p>{selectedHamster.desc}</p>
            <h3 style={{ marginTop: "15px" }}>Activities:</h3>
            <ul style={{ textAlign: "left" }}>
              {selectedHamster.activities.map((act, idx) => (
                <li key={idx}>{act}</li>
              ))}
            </ul>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              <button
                onClick={() => setSelectedHamster(null)}
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#999",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
              <button
                onClick={() => setShowContact(true)}
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#28a745",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Let’s Adopt
              </button>
            </div>

            {showContact && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  backgroundColor: "#f9f9f9",
                  textAlign: "left",
                }}
              >
                <h3>Contact Details:</h3>
                <p>📞 Phone: {selectedHamster.contact.phone}</p>
                <p>📧 Email: {selectedHamster.contact.email}</p>
                <p>📍 Location: {selectedHamster.contact.location}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
