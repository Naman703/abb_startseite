import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CircularEconomyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function CircularEconomyCard({ icon: Icon, title, description }: CircularEconomyCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-[#ff000f] border-2 border-transparent">
      <div className="flex flex-col items-center text-center">
        <Icon className="w-12 h-12 text-[#ff000f] mb-4" />
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}