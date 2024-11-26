import React from 'react';
import { Recycle, Battery, Wind, LineChart } from 'lucide-react';
import CircularEconomyCard from './CircularEconomyCard';

const cards = [
  {
    icon: Recycle,
    title: "Kreislaufwirtschaft fördern",
    description: "Mit innovativen Lösungen optimieren wir Recyclingprozesse und fördern die Wiederverwendung von Materialien."
  },
  {
    icon: Battery,
    title: "Energieeffizienz maximieren",
    description: "Unsere Technologien reduzieren den Energieverbrauch und tragen zu einer CO2-neutralen Zukunft bei."
  },
  {
    icon: Wind,
    title: "Erneuerbare Energien integrieren",
    description: "Wir ermöglichen den Einsatz von erneuerbaren Energien in industriellen Anwendungen."
  },
  {
    icon: LineChart,
    title: "Nachhaltige Wertschöpfungskette",
    description: "Unsere Mission ist eine nachhaltige Lieferkette, die Umwelt und Ressourcen schützt."
  }
];

export default function CircularEconomySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Unsere Mission zur Kreislaufwirtschaft
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {cards.map((card, index) => (
            <CircularEconomyCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-[#ff000f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#cc000c] transition-colors duration-300"
          >
            Mehr über unsere Nachhaltigkeit erfahren
          </a>
        </div>
      </div>
    </section>
  );
}