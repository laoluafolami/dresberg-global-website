import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'es' | 'pt' | 'de' | 'ar' | 'ha' | 'yo' | 'ig' | 'zh';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

export const supportedLanguages: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', rtl: true },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa', flag: '🇳🇬' },
  { code: 'yo', name: 'Yoruba', nativeName: 'Yorùbá', flag: '🇳🇬' },
  { code: 'ig', name: 'Igbo', nativeName: 'Igbo', flag: '🇳🇬' }
];

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isRTL: boolean;
  getLanguageInfo: (code: Language) => LanguageInfo | undefined;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Translation storage
let translations: Record<string, Record<Language, string>> = {};

// Load translations dynamically
const loadTranslations = async (language: Language) => {
  try {
    const module = await import(`../translations/${language}.json`);
    return module.default;
  } catch (error) {
    console.warn(`Failed to load translations for ${language}:`, error);
    // Fallback to English if available
    if (language !== 'en') {
      try {
        const fallback = await import('../translations/en.json');
        return fallback.default;
      } catch (fallbackError) {
        console.error('Failed to load fallback translations:', fallbackError);
        return {};
      }
    }
    return {};
  }
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [loadedTranslations, setLoadedTranslations] = useState<Record<Language, Record<string, string>>>({} as any);

  const loadLanguageTranslations = async (language: Language) => {
    if (!loadedTranslations[language]) {
      const translations = await loadTranslations(language);
      setLoadedTranslations(prev => ({
        ...prev,
        [language]: translations
      }));
    }
  };

  // Detect browser language on initial load
  useEffect(() => {
    const detectLanguage = (): Language => {
      // Check localStorage first
      const savedLanguage = localStorage.getItem('preferred-language') as Language;
      if (savedLanguage && supportedLanguages.find(lang => lang.code === savedLanguage)) {
        return savedLanguage;
      }

      // Check browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (supportedLanguages.find(lang => lang.code === browserLang)) {
        return browserLang;
      }

      // Default to English
      return 'en';
    };

    const detectedLanguage = detectLanguage();
    setCurrentLanguage(detectedLanguage);
    loadLanguageTranslations(detectedLanguage);
  }, []);

  const changeLanguage = async (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
    
    // Load translations if not already loaded
    await loadLanguageTranslations(language);
    
    // Update document direction for RTL languages
    const languageInfo = supportedLanguages.find(lang => lang.code === language);
    document.documentElement.dir = languageInfo?.rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const currentTranslations = loadedTranslations[currentLanguage] || {};
    let translation = currentTranslations[key];

    // Fallback to English if translation not found
    if (!translation && currentLanguage !== 'en') {
      const englishTranslations = loadedTranslations['en'] || {};
      translation = englishTranslations[key];
    }

    // Fallback to key if no translation found
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
      return key;
    }

    // Replace parameters in translation
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(new RegExp(`{{${param}}}`, 'g'), String(value));
      });
    }

    return translation;
  };

  const getLanguageInfo = (code: Language): LanguageInfo | undefined => {
    return supportedLanguages.find(lang => lang.code === code);
  };

  const isRTL = supportedLanguages.find(lang => lang.code === currentLanguage)?.rtl || false;

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    t,
    isRTL,
    getLanguageInfo
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}

// Utility function for components that need translation outside of React
export const getTranslation = (key: string, language: Language = 'en'): string => {
  // This would need to be implemented based on your specific needs
  return key;
};