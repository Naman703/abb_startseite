import React from 'react';
import ShoppingCard from './ShoppingCard';

const shoppingCards = [
  {
    image: 'https://images.unsplash.com/photo-1537111261224-6fa49cecda2f?auto=format&fit=crop&q=80&w=1920',
    title: 'Energieeinsparungen mit IE5-Synchronmotoren',
    date: '15. März 2024',
    description: 'Erfahren Sie, wie die neuesten IE5-Motoren Energie sparen und Effizienz in industrielle Prozesse bringen.'
  },
  {
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1920',
    title: 'Nachhaltigkeit durch Kreislaufwirtschaft',
    date: '12. März 2024',
    description: 'ABB fördert nachhaltige Lösungen durch Recycling und CO2-neutrale Produktionsmethoden.'
  },
  {
    image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&q=80&w=1920',
    title: 'Digitale Innovationen für die Wasserwirtschaft',
    date: '10. März 2024',
    description: 'Entdecken Sie, wie ABB-Technologien die Effizienz in der Wasserwirtschaft verbessern.'
  }
];

const infoCards = [
  {
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920',
    title: 'Erleben Sie ABB-Produkte hautnah',
    description: 'Erfahren Sie, wie unsere Lösungen die Welt nachhaltiger gestalten.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1920',
    title: 'Ihr Wegweiser für ABB-Produkte',
    description: 'Nutzen Sie unsere Anleitungen, um das volle Potenzial unserer Produkte zu entfalten.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?auto=format&fit=crop&q=80&w=1920',
    title: 'Antworten auf Ihre Fragen',
    description: 'Entdecken Sie unsere FAQs für schnelle und präzise Lösungen.'
  }
];

export default function ShoppingExperience() {
  return (
    <>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Entdecken Sie das ABB Einkaufserlebnis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shoppingCards.map((card, index) => (
              <ShoppingCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Weitere Informationen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infoCards.map((card, index) => (
              <ShoppingCard
                key={index}
                {...card}
                date="" // Empty date for info cards
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}