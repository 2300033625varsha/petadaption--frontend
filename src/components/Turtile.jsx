import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Turtile() {
    const navigate = useNavigate();
    const [selectedTurtile, setSelectedTurtile] = useState(null);
    const [showContact, setShowContact] = useState(false);

    const turtiles = [
        {
            name: "Red-Eared Slider",
            img: "https://www.thesprucepets.com/thmb/2Qa2q89ZkZPq0CDAm7urAHa_Tyw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/turtle-species-great-pets-4788330-hero-7883bb247ecb4d30910d08f717198d76.jpg",
            desc: "A calm and wise turtle who enjoys basking in the sun.",
            activities: ["Basks in sunlight", "Slow and steady", "Loves swimming in shallow water"],
            contact: { phone: "+91 91234 10001", email: "shelly.adopt@petadopt.org", location: "Goa, India" },
        },
        {
            name: "Western Painted Turtle",
            img: "https://www.thesprucepets.com/thmb/9LtUvXIgC4pBFboPjteDPTSgGio=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-979443084-0adb9494f2dc49e08ce04f28af117be2.jpg",
            desc: "Energetic little turtle, curious and loves exploring around.",
            activities: ["Explores surroundings", "Enjoys lettuce snacks", "Active during the day"],
            contact: { phone: "+91 91234 10002", email: "speedy.adopt@petadopt.org", location: "Kerala, India" },
        },
        {
            name: "African Sideneck Turtle",
            img: "https://www.thesprucepets.com/thmb/XCLcNrCF88J-lpE0JAWu_VxfGe4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1094092102-7cd8c6ad71fd4c81ab05d74768f09a37.jpg",
            desc: "Friendly and adorable, Pebble loves calm water spaces.",
            activities: ["Loves calm water", "Enjoys gentle care", "Friendly nature"],
            contact: { phone: "+91 91234 10003", email: "pebble.adopt@petadopt.org", location: "Pondicherry, India" },
        },
        {
            name: "Eastern Box Turtle",
            img: "https://www.thesprucepets.com/thmb/jMgKAwcPjYBJeWsUXZn_SKuN654=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-986739564-ac1c2e89821b4be08845caa631222249.jpg",
            desc: "Strong little turtle, enjoys resting on rocks and being in nature.",
            activities: ["Rests on rocks", "Very calm", "Peaceful companion"],
            contact: { phone: "+91 91234 10004", email: "rocky.adopt@petadopt.org", location: "Andaman, India" },
        },
    ];

    return (
        <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#242424", color: "white", fontFamily: "sans-serif" }}>
            {/* Navbar */}
            <nav
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px 50px",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                }}
            >
                <h2 style={{ margin: 0, cursor: "pointer" }} onClick={() => navigate("/")}>
                    PetAdopt
                </h2>
                <button
                    onClick={() => navigate("/home")}
                    style={{ background: "none", border: "1px solid white", color: "white", padding: "5px 12px", borderRadius: "5px", cursor: "pointer" }}
                >
                    Home
                </button>
            </nav>

            {/* Turtile Section */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h1 style={{ marginBottom: "40px" }}>Adopt a Turtile 🐢</h1>
                <p style={{ marginBottom: "30px", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                    These lovely Turtiles are rescued and waiting for a safe and loving family ❤
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginTop: "40px" }}>
                    {turtiles.map((turtile) => (
                        <div
                            key={turtile.name}
                            style={{
                                backgroundColor: "#2a2a2a",
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                textAlign: "center",
                            }}
                        >
                            <img src={turtile.img} alt={turtile.name} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            <h3 style={{ margin: "10px 0" }}>{turtile.name}</h3>
                            <p style={{ padding: "0 10px 20px 10px", fontSize: "1rem" }}>{turtile.desc}</p>
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
                                    setSelectedTurtile(turtile);
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
            {selectedTurtile && (
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
                            src={selectedTurtile.img}
                            alt={selectedTurtile.name}
                            style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "15px" }}
                        />
                        <h2>{selectedTurtile.name}</h2>
                        <p>{selectedTurtile.desc}</p>
                        <h3 style={{ marginTop: "15px" }}>Activities:</h3>
                        <ul style={{ textAlign: "left" }}>
                            {selectedTurtile.activities.map((act, idx) => (
                                <li key={idx}>{act}</li>
                            ))}
                        </ul>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <button
                                onClick={() => setSelectedTurtile(null)}
                                style={{ padding: "8px 16px", border: "none", borderRadius: "8px", backgroundColor: "#999", color: "white", cursor: "pointer" }}
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setShowContact(true)}
                                style={{ padding: "8px 16px", border: "none", borderRadius: "8px", backgroundColor: "#28a745", color: "white", cursor: "pointer" }}
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
                                <p>📞 Phone: {selectedTurtile.contact.phone}</p>
                                <p>📧 Email: {selectedTurtile.contact.email}</p>
                                <p>📍 Location: {selectedTurtile.contact.location}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
