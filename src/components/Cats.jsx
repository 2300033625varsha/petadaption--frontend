import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cats() {
    const navigate = useNavigate();
    const [selectedCat, setSelectedCat] = useState(null);
    const [showContact, setShowContact] = useState(false);

    const cats = [
        {
            name: "Siamese",
            img: "https://www.thesprucepets.com/thmb/DPRZW9AgVbH7puTsgEiMtkpX-ig=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Stocksy_txpe3e966aau8r100_Medium_1128816-5a9426131d64040037fe58bc.jpg",
            desc: "Rescued from a shelter. Gentle and affectionate, loves cozy naps.",
            activities: ["Loves warm naps", "Purrs when happy", "Enjoys being cuddled"],
            contact: { phone: "+91 91234 56789", email: "luna.adopt@petadopt.org", location: "Hyderabad, India" },
        },
        {
            name: "Persian",
            img: "https://www.thesprucepets.com/thmb/txDzyx1_bf8ec8RPWJbMMb5XKcU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Stocksy_txpa51d9a7fCEU100_Medium_329801-5a942538fa6bcc0037b9969d.jpg",
            desc: "Playful little boy, rescued from the streets. Loves human company.",
            activities: ["Chasing strings", "Playful jumps", "Friendly with people"],
            contact: { phone: "+91 99887 65432", email: "milo.adopt@petadopt.org", location: "Chennai, India" },
        },
        {
            name: "Maine Coon",
            img: "https://www.thesprucepets.com/thmb/5fsYLzLt0dc_Fu8hmEhmkvDClEo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4635777030_34dac7b248_o-resized-57b747bf5f9b58cdfdc0b483.jpg",
            desc: "Friendly and calm. Found abandoned, now waiting for a warm home.",
            activities: ["Relaxed naps", "Calm personality", "Enjoys quiet time"],
            contact: { phone: "+91 98765 43210", email: "chloe.adopt@petadopt.org", location: "Bangalore, India" },
        },
        {
            name: "Ragdoll",
            img: "https://www.thesprucepets.com/thmb/5LIyHSh-QrP8tkmBBRjabyWtvKM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2763299412_a659000083_o-57b753645f9b58cdfdd1789e.jpg",
            desc: "Curious explorer, energetic and loving. Needs a caring family.",
            activities: ["Climbs furniture", "Energetic play", "Loves exploring"],
            contact: { phone: "+91 90000 12345", email: "simba.adopt@petadopt.org", location: "Pune, India" },
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

            {/* Cats Section */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h1 style={{ marginBottom: "40px" }}>Adopt a Cat 🐱</h1>
                <p style={{ marginBottom: "30px", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                    These lovely cats were rescued and are waiting for a family to give them love and care ❤
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginTop: "40px" }}>
                    {cats.map((cat) => (
                        <div key={cat.name} style={{ backgroundColor: "#2a2a2a", borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", textAlign: "center" }}>
                            <img src={cat.img} alt={cat.name} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            <h3 style={{ margin: "10px 0" }}>{cat.name}</h3>
                            <p style={{ padding: "0 10px 20px 10px", fontSize: "1rem" }}>{cat.desc}</p>
                            <button
                                style={{ margin: "15px 0", padding: "10px 20px", border: "none", borderRadius: "8px", backgroundColor: "#ff6f61", color: "white", cursor: "pointer" }}
                                onClick={() => {
                                    setSelectedCat(cat);
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
            {selectedCat && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
                    <div style={{ background: "#fff", color: "#000", borderRadius: "15px", padding: "30px", width: "400px", maxHeight: "80vh", overflowY: "auto", textAlign: "center" }}>
                        <img src={selectedCat.img} alt={selectedCat.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "15px" }} />
                        <h2>{selectedCat.name}</h2>
                        <p>{selectedCat.desc}</p>
                        <h3 style={{ marginTop: "15px" }}>Activities:</h3>
                        <ul style={{ textAlign: "left" }}>
                            {selectedCat.activities.map((act, idx) => (
                                <li key={idx}>{act}</li>
                            ))}
                        </ul>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <button
                                onClick={() => setSelectedCat(null)}
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
                            <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f9f9f9", textAlign: "left" }}>
                                <h3>Contact Details:</h3>
                                <p>📞 Phone: {selectedCat.contact.phone}</p>
                                <p>📧 Email: {selectedCat.contact.email}</p>
                                <p>📍 Location: {selectedCat.contact.location}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}