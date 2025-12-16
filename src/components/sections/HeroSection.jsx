import React from 'react';
import { ASSETS } from '../../data/consts';
import { FileText, Sparkles, Search, CheckCircle, Database, BarChart3, PenTool, Palette } from '../ui/Icons';
import { DrawingTransformation } from '../ui/DrawingTransformation';

export const HeroSection = () => {
    // JRELogo local component or image
    const JRELogo = ({ className }) => (
        <img src={ASSETS.logo} alt="JRE Logo" className={`${className} transition-all duration-500 ease-out hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.7)] hover:scale-105`} />
    );

    return (
        <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full max-w-[1400px] mx-auto pointer-events-none z-10">
                <div className="hidden lg:block">
                    <DrawingTransformation initialIcon={FileText} finalIcon={Sparkles} label="IDEA" delay={0} x="10%" y="15%" rotation={-6} />
                </div>
                <div className="hidden md:block">
                    <DrawingTransformation initialIcon={Search} finalIcon={CheckCircle} label="RESULTADOS" delay={2500} x="85%" y="70%" rotation={4} />
                </div>
                <div className="hidden lg:block">
                    <DrawingTransformation initialIcon={Database} finalIcon={BarChart3} label="ANÁLISIS" delay={5000} x="80%" y="20%" rotation={3} />
                </div>
                <div className="hidden md:block">
                    <DrawingTransformation initialIcon={PenTool} finalIcon={Palette} label="DISEÑO" delay={4000} x="12%" y="65%" rotation={-3} />
                </div>
            </div>

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs font-mono mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                    Open to work
                </div>
                <h1 className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[1.05] drop-shadow-2xl">
                    <JRELogo className="h-32 w-32 sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 mb-2 md:mb-0" />
                    <span className="underline decoration-blue-500 decoration-4 underline-offset-4 md:underline-offset-8">design</span>
                </h1>
                <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                    Transformando ideas en identidades visuales que conectan y perduran. Construyo experiencias visuales con atención al detalle.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#portfolio" className="px-8 py-3 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-200 transition-colors">Ver Proyectos</a>
                    <a href="#contacto" className="px-8 py-3 bg-transparent border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-800/50 transition-colors">Contactar</a>
                </div>
            </div>
        </section>
    );
};
