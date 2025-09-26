import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Fish() {
    const navigate = useNavigate();
    const [selectedFish, setSelectedFish] = useState(null);
    const [showContact, setShowContact] = useState(false);
    const fishes = [
        {
            name: "Goldie",
            img: "https://www.liveaquaria.com/images/categories/thumbs/th_94712_Electric_Yellow_Cichlid.jpg",
            desc: "A beautiful golden fish, peaceful and easy to care for.",
            activities: ["Swims calmly", "Enjoys bubbles", "Loves fish flakes"],
            contact: {
                phone: "+91 91234 20001",
                email: "goldie.adopt@petadopt.org",
                location: "Kolkata, India"
            },
        },
        {
            name: "Bubbles",
            img: "https://www.liveaquaria.com/images/categories/thumbs/th_89916_Praecox_Rainbow.jpg",
            desc: "Playful and lively fish, adds joy to any aquarium.",
            activities: ["Blows bubbles",
                "Active swimmer",
                "Playful nature"],
            contact: {
                phone: "+91 91234 20002",
                email: "bubbles.adopt@petadopt.org", location: "Delhi, India"
            },
        },
        {
            name: "Sparkle",
            img: "https://www.liveaquaria.com/images/categories/thumbs/th_89987_Albino_Rainbow_Shark.jpg",
            desc: "A shimmering beauty, loves swimming in groups.", activities: ["Shiny scales", "Peaceful swimmer", "Enjoys company"],
            contact: {
                phone: "+91 91234 20003",
                email: "sparkle.adopt@petadopt.org",
                location: "Mumbai, India"
            },
        },
        {
            name: "Bluey", img: "https://www.liveaquaria.com/images/categories/thumbs/th_Black_Harlequin_Rasbora.jpg",
            desc: "Charming blue fish, calm and soothing to watch.",
            activities: ["Glides smoothly", "Loves clean water", "Very gentle"],
            contact: { phone: "+91 91234 20004", email: "bluey.adopt@petadopt.org", location: "Chennai, India" },
        },
    ];
    return (<div style={{
        minHeight: "100vh", width: "100%", backgroundColor: "#242424", color: "white", fontFamily: "sans-serif"

    }
    }>
        {/* Navbar */} <nav style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 50px",
            backgroundColor: "rgba(0,0,0,0.7)",
            position: "sticky",
            top: 0,
            zIndex: 10,
        }
        } >
            <h2 style={{ margin: 0, cursor: "pointer" }} onClick={() => navigate("/")}> PetAdopt </h2> <button onClick={() => navigate("/home")}
                style={{ background: "none", border: "1px solid white", color: "white", padding: "5px 12px", borderRadius: "5px", cursor: "pointer" }
                } > Home </button> </nav> {/* Fishes Section */} <section style={{ padding: "50px 20px", textAlign: "center" }}> <h1 style={{ marginBottom: "40px" }}>Adopt a Fish 🐟</h1>
            <p style={{ marginBottom: "30px", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}> These adorable fishes are waiting to bring color and peace to your home ❤ </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginTop: "40px" }}> {fishes.map((fish) => (<div key={fish.name} style={{ backgroundColor: "#2a2a2a", borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", textAlign: "center" }}>
                <img src={fish.img} alt={fish.name} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                <h3 style={{ margin: "10px 0" }}>{fish.name}</h3>
                <p style={{ padding: "0 10px 20px 10px", fontSize: "1rem" }}>{fish.desc}</p>
                <button style={{ margin: "15px 0", padding: "10px 20px", border: "none", borderRadius: "8px", backgroundColor: "#ff6f61", color: "white", cursor: "pointer" }} onClick={() => { setSelectedFish(fish); setShowContact(false); }} > Adopt Me </button> </div>))} </div> </section> {/* Modal */} {selectedFish && (<div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
                    <div style={{ background: "#fff", color: "#000", borderRadius: "15px", padding: "30px", width: "400px", maxHeight: "80vh", overflowY: "auto", textAlign: "center" }}>
                        <img src={selectedFish.img} alt={selectedFish.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "15px" }} />
                        <h2>{selectedFish.name}</h2>
                        <p>{selectedFish.desc}</p>
                        <h3 style={{ marginTop: "15px" }}>Activities:</h3>
                        <ul style={{ textAlign: "left" }}> {selectedFish.activities.map((act, idx) => (<li key={idx}>{act}</li>))} </ul>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <button onClick={() => setSelectedFish(null)} style={{ padding: "8px 16px", border: "none", borderRadius: "8px", backgroundColor: "#999", color: "white", cursor: "pointer" }} > Close </button>
                            <button onClick={() => setShowContact(true)} style={{ padding: "8px 16px", border: "none", borderRadius: "8px", backgroundColor: "#28a745", color: "white", cursor: "pointer" }} > Let’s Adopt </button>
                        </div> {showContact && (<div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f9f9f9", textAlign: "left" }}>
                            <h3>Contact Details:</h3>
                            <p>📞 Phone: {selectedFish.contact.phone}</p>
                            <p>📧 Email: {selectedFish.contact.email}</p>
                            <p>📍 Location: {selectedFish.contact.location}</p>
                        </div>
                        )
                        }
                    </div>
                </div>)} </div>);
}