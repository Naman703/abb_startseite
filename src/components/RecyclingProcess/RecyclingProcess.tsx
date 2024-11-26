import React, { useState } from 'react';
import { Truck, ScanLine, Recycle, Factory, Leaf } from 'lucide-react';
import RecyclingStep from './RecyclingStep';

const steps = [
  {
    icon: Truck,
    title: 'Sammlung alter Maschinen',
    description: 'ABB sammelt alte Motoren und Anlagen für einen nachhaltigen Recyclingprozess.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?auto=format&fit=crop&q=80&w=1920'
  },
  {
    icon: ScanLine,
    title: 'Sortierung und Bewertung',
    description: 'Identifizierung wiederverwendbarer Komponenten und effektives Recycling von Materialien.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1920'
  },
  {
    icon: Recycle,
    title: 'Materialrecycling',
    description: 'Gewinnung wertvoller Materialien zur Wiederverwendung und Abfallreduzierung.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1920'
  },
  {
    icon: Factory,
    title: 'Herstellung neuer Produkte',
    description: 'Wiederaufbereitung recycelter Materialien zur Herstellung effizienter ABB-Motoren.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920'
  },
  {
    icon: Leaf,
    title: 'Förderung der Kreislaufwirtschaft',
    description: 'Beitrag zu einer nachhaltigen Zukunft mit CO2-neutralen Prozessen.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1920'
  }
];

export default function RecyclingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stärkung der Kreislaufwirtschaft mit ABB Recycling-Lösungen
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Erfahren Sie, wie ABB alte Motoren und Maschinen in nachhaltige Lösungen 
            verwandelt und eine CO2-arme Zukunft vorantreibt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <RecyclingStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isActive={activeStep === index}
                onMouseEnter={() => setActiveStep(index)}
              />
            ))}
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeStep === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/90 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}