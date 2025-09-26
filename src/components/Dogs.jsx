import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dogs() {
    const navigate = useNavigate();
    const [selectedDog, setSelectedDog] = useState(null);
    const [showContact, setShowContact] = useState(false);

    const dogs = [
        {
            name: "Hound Group",
            img: "https://www.thesprucepets.com/thmb/BdVdg21eoogELz-_ktIxwrrMIkg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-566943335-79f16d740c794e77bf160dc46bb06f94.jpg",
            desc: "A playful Labrador looking for a loving family.",
            activities: ["Loves running", "Enjoys fetch", "Great with kids"],
            contact: { phone: "+91 91234 10001", email: "bruno.adopt@petadopt.org", location: "Bangalore, India" },
        },
        {
            name: "Non-Sporting Group",
            img: "https://www.thesprucepets.com/thmb/NnVKjhgfZVMRZiLnh8xXHc4zIfc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/American_Eskimo_Dog_1-2ae6659955ec4885b25bfb25220e7f60.jpg",
            desc: "A calm and gentle Golden Retriever.",
            activities: ["Loves cuddles", "Enjoys long walks", "Friendly with everyone"],
            contact: { phone: "+91 91234 10002", email: "maya.adopt@petadopt.org", location: "Hyderabad, India" },
        },
        {
            name: "Herding Group",
            img: "https://www.thesprucepets.com/thmb/WD-ylGk7NYtGChHE16CycUiA4Ik=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-128106921-87c8f8ec80304153a6e0c39ffb2a7816.jpg",
            desc: "An energetic Beagle who loves walks and is looking for a loving home.",
            activities: ["Enjoys sniffing trails", "Very playful", "Loves belly rubs"],
            contact: { phone: "+91 91234 10003", email: "charlie.adopt@petadopt.org", location: "Pune, India" },
        },
        {
            name: "Terrier Group",
            img: "https://www.thesprucepets.com/thmb/u-y2HKQlxsWUMpAUMm81q5h3w5E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spruce-pets-smooth-fox-terrier-f22f96ffa94b4b24aa34fd6a15307417.jpg",
            desc: "A sweet Husky with bright blue eyes.",
            activities: ["Loves snow", "Enjoys running", "Very affectionate"],
            contact: { phone: "+91 91234 10004", email: "luna.adopt@petadopt.org", location: "Delhi, India" },
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

            {/* Dogs Section */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h1 style={{ marginBottom: "40px" }}>Adopt a Dog 🐶</h1>
                <p style={{ marginBottom: "30px", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                    These loyal dogs are waiting for a forever home ❤
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginTop: "40px" }}>
                    {dogs.map((dog) => (
                        <div key={dog.name} style={{ backgroundColor: "#2a2a2a", borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", textAlign: "center" }}>
                            <img src={dog.img} alt={dog.name} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            <h3 style={{ margin: "10px 0" }}>{dog.name}</h3>
                            <p style={{ padding: "0 10px 20px 10px", fontSize: "1rem" }}>{dog.desc}</p>
                            <button
                                style={{ margin: "15px 0", padding: "10px 20px", border: "none", borderRadius: "8px", backgroundColor: "#ff6f61", color: "white", cursor: "pointer" }}
                                onClick={() => {
                                    setSelectedDog(dog);
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
            {selectedDog && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
                    <div style={{ background: "#fff", color: "#000", borderRadius: "15px", padding: "30px", width: "400px", maxHeight: "80vh", overflowY: "auto", textAlign: "center" }}>
                        <img src={selectedDog.img} alt={selectedDog.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "15px" }} />
                        <h2>{selectedDog.name}</h2>
                        <p>{selectedDog.desc}</p>
                        <h3 style={{ marginTop: "15px" }}>Activities:</h3>
                        <ul style={{ textAlign: "left" }}>
                            {selectedDog.activities.map((act, idx) => (
                                <li key={idx}>{act}</li>
                            ))}
                        </ul>

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <button
                                onClick={() => setSelectedDog(null)}
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
                                <p>📞 Phone: {selectedDog.contact.phone}</p>
                                <p>📧 Email: {selectedDog.contact.email}</p>
                                <p>📍 Location: {selectedDog.contact.location}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
