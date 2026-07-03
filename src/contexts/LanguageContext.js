import React, {
  createContext, useContext, useState, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import translations from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(
    () => localStorage.getItem('wika_lang') || 'en',
  );

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('wika_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'ar') {
      document.documentElement.classList.add('lang-ar');
    } else {
      document.documentElement.classList.remove('lang-ar');
    }
  }, [language]);

  const t = translations[language];

  const value = useMemo(
    () => ({ t, language, setLanguage }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useTranslation() {
  return useContext(LanguageContext);
}
