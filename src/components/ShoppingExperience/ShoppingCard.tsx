import React from 'react';

interface ShoppingCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

export default function ShoppingCard({ image, title, date, description }: ShoppingCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border-2 border-transparent hover:border-[#ff000f] transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{date}</p>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}