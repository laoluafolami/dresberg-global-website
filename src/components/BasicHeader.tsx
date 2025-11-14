import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface BasicHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function BasicHeader({ currentPage, onNavigate }: BasicHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'blog', label: 'Blog & Insights' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <header className="bg-white dark:bg-slate-900 shadow-md fixed w-full top-0 z-50 transition-colors">
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
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white hidden">Dresberg Global</h2>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-teal-700 dark:text-teal-400 border-b-2 border-teal-700 dark:border-teal-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-teal-700 dark:hover:text-teal-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex flex-col items-center text-xs text-gray-600 dark:text-gray-400 mx-4 border-l border-gray-300 dark:border-gray-600 pl-4">
              <div className="font-mono">{formatTime(currentTime)}</div>
              <div className="font-mono text-[10px]">{formatDate(currentTime)}</div>
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? '✕' : '☰'}
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
                    ? 'bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300'
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