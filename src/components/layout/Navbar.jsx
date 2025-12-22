import React, { useState, useEffect } from 'react';
import { ASSETS } from '../../data/consts';
import NeonSwitch from '../ui/NeonSwitch';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleLanguageToggle = () => {
        toggleLanguage();
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/80 backdrop-blur-md py-4 shadow-lg border-b border-zinc-800" : "bg-transparent py-6"}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">

                {/* LOGO AREA */}
                <div className="flex items-center gap-3 md:gap-4">
                    <a href="#inicio" onClick={scrollToTop} className="cursor-pointer flex items-center gap-2">
                        <img src={ASSETS.logoColor} alt="JRE Logo Color" className="h-10 w-auto" onError={(e) => { e.target.style.display = "none"; }} />
                    </a>
                    <div className="text-white font-medium text-sm leading-tight tracking-tight cursor-default hidden sm:block font-sans">
                        {t.navbar.title} <span className="font-normal text-zinc-400 ml-2">| {t.navbar.subtitle}</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {t.navbar.links.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-300 hover:text-blue-500 transition-colors duration-300 relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    {/* SWITCH DE IDIOMA - DESKTOP */}
                    <div className="ml-4 pl-4 border-l border-zinc-700">
                        <NeonSwitch
                            isChecked={language === 'en'}
                            onChange={handleLanguageToggle}
                        />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-zinc-300 hover:text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl items-center">
                    {t.navbar.links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-zinc-300 hover:text-blue-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* SWITCH DE IDIOMA - MOBILE */}
                    <div className="mt-2 pt-4 border-t border-zinc-800 w-full flex justify-center flex-col items-center gap-2">
                        <span className="text-zinc-500 text-xs uppercase tracking-widest">{t.navbar.languageLabel}</span>
                        <NeonSwitch
                            isChecked={language === 'en'}
                            onChange={handleLanguageToggle}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};
