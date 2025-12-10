import React, { createContext, useState, useEffect } from 'react';
import { fbPixelEvents } from '../utils/fbPixel';
import { gaEvents } from '../utils/googleAnalytics';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Obtener el idioma del localStorage o usar 'es' por defecto
    const savedLanguage = localStorage.getItem('language');
    console.log(savedLanguage, 'savedLanguage');
    
    return savedLanguage || 'es';
  });

  const handleLanguageChange = (newLanguage) => {
    const previousLanguage = language;
    setLanguage(newLanguage);
    console.log(language);
    localStorage.setItem('language', newLanguage);
    
    // Track cambio de idioma - Facebook Pixel
    fbPixelEvents.changeLanguage(newLanguage);
    
    // Track cambio de idioma - Google Analytics
    gaEvents.changeLanguage(previousLanguage, newLanguage);
  };
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);
  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};