import React, { useRef } from 'react';
import { 
  CircuitBoard, 
  Gauge, 
  Cpu, 
  Factory, 
  Cog, 
  Settings, 
  WrenchIcon, 
  Wrench,
  RotateCw,
  Zap,
  GitBranch,
  Server
} from 'lucide-react';
import CategoryIcon from './CategoryIcon';

const stats = [
  { value: "20K+", label: "Produkte" },
  { value: "80+", label: "Kategorien/Sub-Kategorien" },
  { value: "130+", label: "Länder" }
];

const categories = [
  { icon: CircuitBoard, title: "Motoren für Frequenzumrichterbetrieb" },
  { icon: Gauge, title: "Drehzahlgeregelte Motoren" },
  { icon: Zap, title: "AC Inverter/Vector Duty Motors" },
  { icon: Cog, title: "Cooling Tower Motors" },
  { icon: Factory, title: "Motoren für explosionsgefährdete Bereiche" },
  { icon: Settings, title: "NEMA DC Motoren" },
  { icon: WrenchIcon, title: "Niederspannungsmotoren" },
  { icon: Wrench, title: "Antriebsoptionen" },
  { icon: RotateCw, title: "Niederspannungs-Frequenzumrichter" },
  { icon: Server, title: "Servo-Produkte" },
  { icon: GitBranch, title: "Software-Tools" },
  { icon: Cpu, title: "PLC Automation" }
];

export default function ProductCategoriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 max-w-4xl mx-auto">
            Entdecken Sie die besten Motoren, Generatoren und Frequenzumrichter für Ihre Anforderungen
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#ff000f]">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-md hover:bg-[#ff000f] hover:text-white transition-colors"
          >
            ←
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="inline-flex gap-4 py-4 px-12">
              {categories.map((category, index) => (
                <CategoryIcon
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  onClick={() => console.log(`Navigating to ${category.title}`)}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-md hover:bg-[#ff000f] hover:text-white transition-colors"
          >
            →
          </button>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#ff000f] text-white rounded-full font-medium hover:bg-[#cc000c] transition-colors shadow-md hover:shadow-lg">
            Mehr erfahren
          </button>
        </div>
      </div>
    </section>
  );
}