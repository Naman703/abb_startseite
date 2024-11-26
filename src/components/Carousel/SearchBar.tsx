import React from 'react';
import { Search } from 'lucide-react';

const quickLinks = ['IE5 Motoren', 'Frequenzumrichter', 'Generatoren'];

interface SearchBarProps {
  caption: string;
}

export default function SearchBar({ caption }: SearchBarProps) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-10">
      <h2 className="text-white text-3xl font-bold text-center mb-8">{caption}</h2>
      
      <div className="relative">
        <input
          type="text"
          placeholder="Produkte suchen..."
          className="w-full h-12 pl-12 pr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff000f] focus:ring-opacity-50 bg-white/90 backdrop-blur-sm transition-all"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#ff000f]" />
      </div>
      
      <div className="mt-4 flex justify-center space-x-4">
        {quickLinks.map((link) => (
          <button
            key={link}
            className="px-6 py-2 text-white bg-[#ff000f] rounded-[30px] hover:bg-[#cc000c] transition-colors"
          >
            {link}
          </button>
        ))}
      </div>
    </div>
  );
}