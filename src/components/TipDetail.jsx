import React from "react";
import { useParams, Link } from "react-router-dom";
import "./TipDetail.css";

export default function TipDetail() {
  const { tipId } = useParams();

  const tipDetails = {
    feed: {
      title: "Proper Feeding for Pets: Steps & Precautions",
      subtitle: "A guide ensuring pet health and well-being through proper nutrition",
      steps: [
        "Consult Your Vet: Diet, portion schedule.",
        "Select Right Food: Complete with AAFCO, balanced meals.",
        "Control Portions: Measure accurately, adjust when needed.",
        "Establish Schedule: Consistent feeding times daily.",
        "Transition Gradually: Over 7–10 days when changing food."
      ],
      precautions: [
        "Avoid Toxic Foods: No table scraps, chocolate, grapes, onions.",
        "Limit Treats: Less than 10% of daily calories.",
        "Maintain Hygiene: Wash bowls & hands daily.",
        "Provide Water: Fresh, clean supply always."
      ],
      icon: "🍽️"
    },
    exercise: {
      title: "Regular Exercises for Pets: Steps & Precautions",
      subtitle: "A guide to keeping your pets healthy and happy through physical activity",
      steps: [
        "Consult Your Vet: Determine suitable exercises.",
        "Plan Routine: Daily walk/playtime or specific schedule.",
        "Start Slowly: Gradually increase intensity and duration.",
        "Mix it Up: Vary activities to keep it engaging.",
        "Hydration: Provide fresh water breaks."
      ],
      precautions: [
        "Avoid Overexertion: Watch for fatigue, limping, or breathing issues.",
        "Weather Conditions: Protect from hot pavement and extreme cold.",
        "Proper Equipment: Use secure leashes, harnesses, and safe toys.",
        "Supervision: Always monitor your pet during exercise."
      ],
      icon: "🏃"
    },
    vet: {
      title: "Regular Vet Checkups for Pets: Steps & Precautions",
      subtitle: "A guide to preventive healthcare and routine veterinary care",
      steps: [
        "Schedule Visits: Routine checkups every 6–12 months.",
        "Vaccinations: Keep all core and booster shots up-to-date.",
        "Dental Care: Ask vet about teeth cleaning and oral health.",
        "Parasite Prevention: Regular checks for fleas, ticks, worms.",
        "Track Health: Maintain records of weight, diet, and changes."
      ],
      precautions: [
        "Handle Gently: Reduce stress during vet visits.",
        "Follow Prescriptions: Give medicines exactly as prescribed.",
        "Monitor Reactions: Watch for side effects after vaccines/meds.",
        "Emergency Readiness: Know where your nearest 24/7 vet is."
      ],
      icon: "🩺"
    }
  };

  const tip = tipDetails[tipId];

  if (!tip) return <h2 style={{ padding: "20px" }}>Tip not found!</h2>;

  return (
    <div className="tip-detail-container">
      <h1>
        {tip.icon} {tip.title}
      </h1>
      {tip.subtitle && <p className="subtitle">{tip.subtitle}</p>}

      <div className="cards-grid">
        {tip.steps && (
          <div className="card steps-card">
            <h2>🐾 Steps</h2>
            <ul>
              {tip.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        {tip.precautions && (
          <div className="card precautions-card">
            <h2>⚠️ Essential Precautions</h2>
            <ul>
              {tip.precautions.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link to="/tips" className="back-link">
        ⬅ Back to Tips
      </Link>
    </div>
  );
}
