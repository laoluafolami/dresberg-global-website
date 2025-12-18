import { useState, useRef, useEffect } from 'react';
import { useTranslation, supportedLanguages, type Language } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, getLanguageInfo } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangInfo = getLanguageInfo(currentLanguage);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter languages based on search query
  const filteredLanguages = supportedLanguages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLanguageSelect = (language: Language) => {
    changeLanguage(language);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 border border-gray-300 dark:border-slate-600 transition-all duration-200 hover:scale-105"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <span className="text-2xl" role="img" aria-label={currentLangInfo?.name}>
          {currentLangInfo?.flag}
        </span>
        <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-200">
          {currentLangInfo?.nativeName}
        </span>
        <svg
          className={`w-4 h-4 text-gray-700 dark:text-gray-200 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden z-50 animate-fadeIn">
          {/* Search Input */}
          <div className="p-3 border-b border-gray-200 dark:border-slate-700">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages..."
                className="w-full pl-10 pr-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
            </div>
          </div>

          {/* Language List */}
          <div className="max-h-96 overflow-y-auto">
            {filteredLanguages.length > 0 ? (
              <div className="py-2">
                {filteredLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors ${
                      currentLanguage === lang.code
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500'
                        : ''
                    }`}
                  >
                    <span className="text-2xl" role="img" aria-label={lang.name}>
                      {lang.flag}
                    </span>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {lang.nativeName}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {lang.name}
                      </div>
                    </div>
                    {currentLanguage === lang.code && (
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-gray-500 dark:text-gray-400">
                <svg
                  className="w-12 h-12 mx-auto mb-2 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p className="text-sm">No languages found</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {supportedLanguages.length} languages available
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}