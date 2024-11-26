import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  products: {
    title: 'ABB Produkte',
    links: [
      'Frequenzumrichter',
      'Motoren und Generatoren',
      'Motion Service'
    ]
  },
  legal: {
    title: 'Rechtliches',
    links: [
      'ABB Verkaufsbedingungen',
      'Cookie und Datenschutzerklärung',
      'Cookie Einstellungen',
      'Digital Service Act'
    ]
  },
  contact: {
    title: 'Kontakt ABB',
    links: [
      'Impressum'
    ]
  }
};

const socialLinks = [
  { icon: Facebook, href: 'facebook', label: 'Facebook' },
  { icon: Instagram, href: 'instagram', label: 'Instagram' },
  { icon: Linkedin, href: 'linkedin', label: 'LinkedIn' },
  { icon: Youtube, href: 'youtube', label: 'YouTube' }
];

export default function Footer() {
  return (
    <footer className="bg-[#1B1F24] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{footerLinks.products.title}</h3>
            <ul className="space-y-2">
              {footerLinks.products.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{footerLinks.legal.title}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{footerLinks.contact.title}</h3>
            <ul className="space-y-2">
              {footerLinks.contact.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">© 2021-2024 ABB</div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={`https://${href}.com`}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}