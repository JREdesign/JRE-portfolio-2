import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/consts';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Detect browser language or default to 'es'
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('portfolio-language');
        if (saved) return saved;

        const browserLang = navigator.language.split('-')[0];
        return browserLang === 'en' ? 'en' : 'es';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-language', language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    const t = TRANSLATIONS[language];

    const value = {
        language,
        toggleLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
