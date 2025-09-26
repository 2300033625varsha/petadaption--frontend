import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Birds() {
    const navigate = useNavigate();
    const [selectedBird, setSelectedBird] = useState(null);
    const [showContact, setShowContact] = useState(false);

    const birds = [
        {
            name: "Mithu",
            img: "https://plus.unsplash.com/premium_photo-1675714692342-01dfd2e6b6b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D",
            desc: "A friendly and talkative bird who loves to mimic and spread joy.",
            activities: ["Mimics sounds", "Enjoys flying", "Loves attention"],
            contact: { phone: "+91 90001 11111", email: "mithu@petadopt.org", location: "Delhi, India" },
        },
        {
            name: "Chinni",
            img: "https://images.unsplash.com/photo-1486365227551-f3f90034a57c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D",
            desc: "Cheerful and small, Chinni loves to sing every morning.",
            activities: ["Sings daily", "Likes morning sun", "Cheerful interactions"],
            contact: { phone: "+91 90001 22222", email: "chinni@petadopt.org", location: "Mumbai, India" },
        },
        {
            name: "Coco",
            img: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D",
            desc: "Playful and curious, Coco enjoys whistling tunes and being around people.",
            activities: ["Whistles tunes", "Explores cage", "Loves playtime"],
            contact: { phone: "+91 90001 33333", email: "coco@petadopt.org", location: "Bangalore, India" },
        },
        {
            name: "Piku",
            img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHxlbnwwfHwwfHx8MA%3D%3D",
            desc: "Affectionate and loving, Piku is always happy when surrounded by company.",
            activities: ["Cuddles with humans", "Loves company", "Playful hops"],
            contact: { phone: "+91 90001 44444", email: "piku@petadopt.org", location: "Chennai, India" },
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

            {/* Birds Section */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h1 style={{ marginBottom: "40px" }}>Adopt a Bird 🐦</h1>
                <p style={{ marginBottom: "30px", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                    These beautiful birds are waiting for a forever home ❤
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "30px",
                        marginTop: "40px",
                    }}
                >
                    {birds.map((bird) => (
                        <div
                            key={bird.name}
                            style={{
                                backgroundColor: "#2a2a2a",
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                textAlign: "center",
                            }}
                        >
                            <img src={bird.img} alt={bird.name} style={{ width: "100%", height: "300px", objectFit: "contain", background: "#fff" }} />
                            <h3 style={{ margin: "10px 0" }}>{bird.name}</h3>
                            <p style={{ padding: "0 10px 20px 10px", fontSize: "1rem" }}>{bird.desc}</p>
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
                                    setSelectedBird(bird);
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
            {selectedBird && (
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
                            src={selectedBird.img}
                            alt={selectedBird.name}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "contain",
                                borderRadius: "10px",
                                marginBottom: "15px",
                                background: "#eee",
                            }}
                        />
                        <h2>{selectedBird.name}</h2>
                        <p>{selectedBird.desc}</p>
                        <h3 style={{ marginTop: "15px" }}>Activities:</h3>
                        <ul style={{ textAlign: "left" }}>
                            {selectedBird.activities.map((act, idx) => (
                                <li key={idx}>{act}</li>
                            ))}
                        </ul>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <button
                                onClick={() => setSelectedBird(null)}
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
                                <p>📞 Phone: {selectedBird.contact.phone}</p>
                                <p>📧 Email: {selectedBird.contact.email}</p>
                                <p>📍 Location: {selectedBird.contact.location}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
