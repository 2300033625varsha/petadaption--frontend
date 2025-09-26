import React from "react";
import { Link } from "react-router-dom";
import "./Tips.css";

export default function Tips() {
  const tipsList = [
    {
      id: "feed",
      title: "Feed Properly",
      img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=60",
      desc: "Give balanced nutrition to your pets for healthy growth."
    },
    {
      id: "exercise",
      title: "Regular Exercise",
      img: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldHN8ZW58MHx8MHx8fDA%3D",
      desc: "Daily walks and playtime keep pets active and happy."
    },
    {
      id: "vet",
      title: "Regular Vet Checkup",
      img: "https://media.istockphoto.com/id/2218833152/photo/loving-dog-licking-a-friendly-veterinarian.webp?a=1&b=1&s=612x612&w=0&k=20&c=ud-x5MJz1xqFGaF8Nj1FtQmYGJVzYtJT8ILuU6unqhE=",
      desc: "Ensure timely vaccinations and checkups."
    }
  ];

  return (
    <div className="tips-container">
      <h1>Pet Care Tips</h1>
      <div className="tips-grid">
        {tipsList.map((tip) => (
          <Link key={tip.id} to={`/tips/${tip.id}`} className="tip-card">
            <img src={tip.img} alt={tip.title} />
            <h3>{tip.title}</h3>
            <p>{tip.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
