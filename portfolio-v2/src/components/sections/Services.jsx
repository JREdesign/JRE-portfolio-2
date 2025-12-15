import React, { useRef, useState, useEffect } from 'react';
import { Section } from '../ui/Section';
import { GlowingServiceCard } from '../ui/Card';
import { SERVICES } from '../../data/consts';

// --- PASO PROCESO (Internal Component) ---
const useInView = (options) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); }
        }, options);
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.disconnect(); };
    }, [options]);
    return [ref, isInView];
};

const ProcessStep = ({ number, title, description, delay, isLast }) => {
    const [ref, isInView] = useInView({ threshold: 0.2 });
    return (
        <div ref={ref} className={`flex flex-col items-center text-center p-6 transition-all duration-1000 transform relative ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className="relative mb-6 w-full flex justify-center">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full w-16 h-16 mx-auto" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/20 z-10">
                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                        <span className="text-xl font-bold text-white font-mono">{number}</span>
                    </div>
                </div>
                {!isLast && <div className="hidden lg:block absolute top-1/2 left-1/2 w-full h-[2px] bg-zinc-800 -z-0 transform -translate-y-1/2" />}
            </div>
            <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export const Services = () => {
    return (
        <Section id="servicios" title="Servicios" titleCenter={false}>
            <div className="mb-16 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Mi Proceso de Trabajo</h3>
                <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    Soluciones integrales de diseño y comunicación visual para empresas, instituciones y emprendedores que buscan destacar en su mercado.
                </p>
            </div>

            <div className="mb-24 grid grid-cols-1 md:grid-cols-4 gap-8">
                <ProcessStep number="01" title="Estrategia Primero" description="Cada proyecto comienza con una comprensión profunda de tus objetivos y audiencia." delay={0} />
                <ProcessStep number="02" title="Diseño Centrado en Resultados" description="No solo creamos algo bonito, sino algo que funciona y genera impacto." delay={200} />
                <ProcessStep number="03" title="Implementación Completa" description="Desde la conceptualización hasta la entrega final con todos los archivos necesarios." delay={400} />
                <ProcessStep number="04" title="Soporte Continuo" description="Te acompaño en la implementación y evolución de tu identidad visual." delay={600} isLast={true} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {SERVICES.map((service, index) => (
                    <GlowingServiceCard
                        key={service.id || index}
                        title={service.title}
                        description={service.description}
                        delay={index * 200}
                    />
                ))}
            </div>
        </Section>
    );
};
