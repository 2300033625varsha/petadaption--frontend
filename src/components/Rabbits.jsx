import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Rabbits() {
    const navigate = useNavigate();
    const [selectedRabbit, setSelectedRabbit] = useState(null);
    const [showContact, setShowContact] = useState(false);

    const rabbits = [
        {
            name: "Alaskan",
            img: "https://www.thesprucepets.com/thmb/c3lZFDzHokm6ARCGsIbVp4TXISM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Alaska_schwarz-5c0da4e046e0fb00016992f0.jpg",
            desc: "A gentle, fluffy rabbit who loves cuddles and calm spaces.",
            activities: ["Loves cuddles", "Calm and quiet", "Enjoys soft bedding"],
            contact: { phone: "+91 90002 11111", email: "alaskan.adopt@petadopt.org", location: "Delhi, India" },
        },
        {
            name: "American",
            img: "https://www.thesprucepets.com/thmb/CoczPUNei0-6EBC6ZOhG2wLVSNo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-136483182-241a399c9e434c189feec1efc812bee4.jpg",
            desc: "Playful and full of energy, American enjoys hopping around happily.",
            activities: ["Hops around playfully", "Curious explorer", "Loves carrots"],
            contact: { phone: "+91 90002 22222", email: "american.adopt@petadopt.org", location: "Mumbai, India" },
        },
        {
            name: "American Chinchilla",
            img: "https://www.thesprucepets.com/thmb/vwVGP08yuJ23O-SkK9W6xNa-G7U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1204146928-a058d35fa2824c7c8a181c93c6bbbda9.jpg",
            desc: "Sweet-natured and affectionate, perfect for a loving family.",
            activities: ["Affectionate", "Enjoys gentle petting", "Loves company"],
            contact: { phone: "+91 90002 33333", email: "chinchilla.adopt@petadopt.org", location: "Bangalore, India" },
        },
        {
            name: "American Sable",
            img: "https://www.thesprucepets.com/thmb/nC_x5ehMcTEvKO7ZW0NDUpesJGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1306004020-3b8f0f72e50246129af29395f3976bfb.jpg",
            desc: "Curious and cheerful, always ready to make you smile.",
            activities: ["Curious", "Playful hops", "Bright and cheerful"],
            contact: { phone: "+91 90002 44444", email: "sable.adopt@petadopt.org", location: "Chennai, India" },
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

            {/* Rabbits Section */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h1 style={{ marginBottom: "40px" }}>Adopt a Rabbit 🐰</h1>
                <p style={{ marginBottom: "30px", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                    These adorable rabbits are waiting to hop into your life and bring you joy ❤
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "30px",
                        marginTop: "40px",
                    }}
                >
                    {rabbits.map((rabbit) => (
                        <div
                            key={rabbit.name}
                            style={{
                                backgroundColor: "#2a2a2a",
                                borderRadius: "15px",
                                overflow: "hidden",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                textAlign: "center",
                            }}
                        >
                            <img src={rabbit.img} alt={rabbit.name} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            <h3 style={{ margin: "10px 0" }}>{rabbit.name}</h3>
                            <p style={{ padding: "0 10px 20px 10px", fontSize: "1rem" }}>{rabbit.desc}</p>
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
                                    setSelectedRabbit(rabbit);
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
            {selectedRabbit && (
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
                            src={selectedRabbit.img}
                            alt={selectedRabbit.name}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                marginBottom: "15px",
                            }}
                        />
                        <h2>{selectedRabbit.name}</h2>
                        <p>{selectedRabbit.desc}</p>
                        <h3 style={{ marginTop: "15px" }}>Activities:</h3>
                        <ul style={{ textAlign: "left" }}>
                            {selectedRabbit.activities.map((act, idx) => (
                                <li key={idx}>{act}</li>
                            ))}
                        </ul>

                        {/* Buttons */}
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <button
                                onClick={() => setSelectedRabbit(null)}
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

                        {/* Contact Details */}
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
                                <p>📞 Phone: {selectedRabbit.contact.phone}</p>
                                <p>📧 Email: {selectedRabbit.contact.email}</p>
                                <p>📍 Location: {selectedRabbit.contact.location}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

