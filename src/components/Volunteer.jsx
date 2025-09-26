import React from "react";
import "./Volunteer.css";

export default function Volunteer() {
    const volunteers = [
        {
            name: "Join Us",
            img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            desc: "Become a volunteer and help pets find loving homes."
        },
        {
            name: "Organize Events",
            img: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            desc: "Participate in adoption drives and awareness programs."
        },
        {
            name: "Foster Care",
            img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            desc: "Provide temporary homes for pets until permanent families are found."
        },
    ];

    return (
        <div className="volunteer-container">
            <h1>Volunteer Support</h1>
            <div className="volunteer-grid">
                {volunteers.map((vol, idx) => (
                    <div key={idx} className="vol-card">
                        <img src={vol.img} alt={vol.name} className="vol-img" />
                        <h3>{vol.name}</h3>
                        <p>{vol.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}