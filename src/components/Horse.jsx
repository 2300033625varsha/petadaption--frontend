import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Horse() {
    const navigate = useNavigate();
    const [selectedHorse, setSelectedHorse] = useState(null);
    const [showContact, setShowContact] = useState(false);

    const horses = [
        {
            name: "Storm",
            img: "https://www.thesprucepets.com/thmb/rsTgoZYbKp3sNLjKfxF1HWVpjpo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-97827519-56a4dba63df78cf77284fc8d.jpg",
            desc: "A strong and majestic horse with a calm temperament.",
            activities: ["Enjoys galloping", "Friendly with people", "Loves open fields"],
            contact: {
                phone: "+91 91234 30001",
                email: "storm.adopt@petadopt.org",
                location: "Jaipur, India"
            },
        },
        {
            name: "Blaze",
            img: "https://www.thesprucepets.com/thmb/f6qDKQo6Fne70VCt-s3ixd8uWRI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7195515982_d4e253aef3_b-1bd9eb937b994e46977a519434e9bc5f.jpg",
            desc: "Energetic and spirited horse, perfect for riding.",
            activities: ["Fast runner", "Adventurous spirit", "Responds well to training"],
            contact: {
                phone: "+91 91234 30002",
                email: "blaze.adopt@petadopt.org",
                location: "Pune, India"
            },
        },
        {
            name: "Daisy",
            img: "https://www.thesprucepets.com/thmb/_neDR16nSYjqcWnedsc0CdQI91s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/horse-and-rider-3-172284758-5755b3293df78c9b46794dea.jpg",
            desc: "Gentle and affectionate horse, loves companionship.",
            activities: ["Calm nature", "Loves grooming", "Great with kids"],
            contact: {
                phone: "+91 91234 30003", email: "daisy.adopt@petadopt.org",
                location: "Bangalore, India"
            },
        },

        {
            name: "Shadow",
            img: "https://www.thesprucepets.com/thmb/HmAotRiJgyvJrRMU2Uaj0qrWFq0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-83189409a-56a786743df78cf77296b6a8.jpg",
            desc: "A beautiful black horse with a loyal personality.",
            activities: ["Graceful walk", "Enjoys long rides", "Protective nature"],
            contact: {
                phone: "+91 91234 30004",
                email: "shadow.adopt@petadopt.org",
                location: "Lucknow, India"
            },
        },];

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

            {/* Horses Section */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h1 style={{ marginBottom: "20px" }}>Adopt a Horse 🐴</h1>
                <p style={{ marginBottom: "30px", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                    These wonderful horses are waiting for a loving home ❤
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "30px",
                        marginTop: "40px",
                    }}
                >
                    {horses.map((horse) => (
                        <div
                            key={horse.name}
                            style={{
                                backgroundColor: "#2a2a2a",
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                textAlign: "center",
                            }}
                        >
                            <img
                                src={horse.img}
                                alt={horse.name}
                                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                            />
                            <h3 style={{ margin: "10px 0" }}>{horse.name}</h3>
                            <p style={{ padding: "0 10px 20px 10px", fontSize: "1rem" }}>{horse.desc}</p>
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
                                    setSelectedHorse(horse);
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
            {selectedHorse && (
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
                            src={selectedHorse.img}
                            alt={selectedHorse.name}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                marginBottom: "15px",
                            }}
                        />
                        <h2>{selectedHorse.name}</h2>
                        <p>{selectedHorse.desc}</p>
                        <h3 style={{ marginTop: "15px" }}>Activities:</h3>
                        <ul style={{ textAlign: "left" }}>
                            {selectedHorse.activities.map((act, idx) => (
                                <li key={idx}>{act}</li>
                            ))}
                        </ul>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <button
                                onClick={() => setSelectedHorse(null)}
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
                                <p>📞 Phone: {selectedHorse.contact.phone}</p>
                                <p>📧 Email: {selectedHorse.contact.email}</p>
                                <p>📍 Location: {selectedHorse.contact.location}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
