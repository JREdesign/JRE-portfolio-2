import React, { useState, useEffect } from 'react';
import { ASSETS } from '../../data/consts';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = [
        { name: "Sobre mí", href: "#sobre-mi" },
        { name: "Habilidades", href: "#habilidades" },
        { name: "Trayectoria", href: "#trayectoria" },
        { name: "Proyectos", href: "#portfolio" }, // Keep href #portfolio to match Section ID or change ID? User said rename "Section Portfolio to Proyectos". I will change Section ID too for consistency or just label. Let's change label here.
        { name: "Servicios", href: "#servicios" },
        { name: "Contacto", href: "#contacto" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/80 backdrop-blur-md py-4 shadow-lg border-b border-zinc-800" : "bg-transparent py-6"}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                    <a href="#inicio" onClick={scrollToTop} className="cursor-pointer flex items-center gap-2">
                        <img src={ASSETS.logoColor} alt="JRE Logo Color" className="h-10 w-auto" onError={(e) => { e.target.style.display = "none"; }} />
                    </a>
                    {/* Force standard font or sans for the special char if it needs it, but Inter supports Greek usually. 
              Maybe "JRΞ" needs to be literal. 
              User said "simbolo no sale bien". Check if I used Ξ (Xi). 
              I'll ensure it is strictly "JRΞdesign" as string. 
              Also, user said "no parece la misma tipografia". 
              Maybe the brand text has a specific font? 
              In original HTML line 1 (not seen) or visually, it might be just bold.
              I will add font-sans explicitly.
           */}
                    <div className="text-white font-medium text-sm leading-tight tracking-tight cursor-default hidden sm:block font-sans">
                        JRΞdesign <span className="font-normal text-zinc-400 ml-2">| Diseño gráfico y Desarrollo web</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-300 hover:text-blue-500 transition-colors duration-300 relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
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
                <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-zinc-300 hover:text-blue-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
