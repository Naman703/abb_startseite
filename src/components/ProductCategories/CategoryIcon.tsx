import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryIconProps {
  icon: LucideIcon;
  title: string;
  onClick: () => void;
}

export default function CategoryIcon({ icon: Icon, title, onClick }: CategoryIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-2 min-w-[160px] group"
    >
      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white border-2 border-gray-200 group-hover:border-[#ff000f] group-hover:shadow-lg transition-all duration-300">
        <Icon className="w-10 h-10 text-gray-700 group-hover:text-[#ff000f]" />
      </div>
      <span className="mt-3 text-sm text-center text-gray-700 group-hover:text-[#ff000f] line-clamp-2">
        {title}
      </span>
    </button>
  );
}