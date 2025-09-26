import React from "react";

export default function AdoptionJourney() {
  const steps = [
    {
      icon: "🔍",
      title: "Search your paw companion",
      desc: "Find a pet closest to your home",
    },
    {
      icon: "📱",
      title: "Meet trusted shelters",
      desc: "Use our well-connected shelters to meet your ideal paw",
    },
    {
      icon: "🏠",
      title: "Bring them home",
      desc: "Adopt your perfect pet and feel the love all around",
    },
    {
      icon: "🩺",
      title: "Vet Checkup",
      desc: "Ensure your new friend gets a healthy start",
    },
    {
      icon: "❤️",
      title: "Care & Love",
      desc: "Provide food, training, and affection",
    },
  ];

  return (
    <section className="bg-[#fff8f0] py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Adoption Journey</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-[#fff1c9] rounded-2xl shadow-md"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
