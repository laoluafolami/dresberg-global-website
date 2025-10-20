import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface SimpleHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function SimpleHeader({ currentPage, onNavigate }: SimpleHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'blog', label: 'Blog & Insights' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/Dresberg.png"
              alt="Dresberg Global Limited"
              className="h-16 w-auto object-contain"
              onError={(e) => {
                console.log('Image failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-teal-700 border-b-2 border-teal-700'
                    : 'text-gray-700 hover:text-teal-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 ${
                  currentPage === item.id
                    ? 'bg-teal-50 text-teal-700 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}