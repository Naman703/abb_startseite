import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RecyclingStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  onMouseEnter: () => void;
}

export default function RecyclingStep({
  icon: Icon,
  title,
  description,
  isActive,
  onMouseEnter,
}: RecyclingStepProps) {
  return (
    <div
      className={`flex items-start space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-300 transform ${
        isActive ? 'scale-105 bg-gray-50' : 'hover:scale-105'
      }`}
      onMouseEnter={onMouseEnter}
    >
      <div className={`p-3 rounded-full transition-colors duration-300 ${
        isActive ? 'bg-[#ff000f] text-white' : 'bg-gray-100 text-gray-600'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className={`font-bold mb-1 transition-colors duration-300 ${
          isActive ? 'text-[#ff000f]' : 'text-gray-800'
        }`}>
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}