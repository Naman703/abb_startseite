import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, User, Globe } from 'lucide-react';

const topMenuItems = ['Nachrichten & Medien', 'Karriere', 'Investoren'];

const menuItems = [
  {
    title: 'Produkte',
    submenu: [
      'Frequenzumrichter und Stromrichter',
      'Motoren und Generatoren',
      'PLC Automation'
    ]
  },
  {
    title: 'Industrien',
    submenu: []
  },
  {
    title: 'Nachhaltigkeit',
    submenu: ['Kreislaufwirtschaft']
  },
  {
    title: 'Über uns',
    submenu: []
  }
];

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header>
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end space-x-6">
            {topMenuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-600 hover:text-[#ff000f] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png"
                alt="ABB Logo"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-[#ff000f] transition-colors">
                    <span>{item.title}</span>
                    {item.submenu.length > 0 && <ChevronDown className="h-4 w-4" />}
                  </button>
                  {item.submenu.length > 0 && activeMenu === item.title && (
                    <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-[#ff000f] cursor-pointer" />
              <User className="h-5 w-5 text-gray-700 hover:text-[#ff000f] cursor-pointer" />
              <Globe className="h-5 w-5 text-gray-700 hover:text-[#ff000f] cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}