import React, { useRef, useState, useEffect } from 'react';
import { Section } from '../ui/Section';
import { GlowingServiceCard } from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';

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
    const { t } = useLanguage();

    return (
        <Section id="servicios" title={t.services.title} titleCenter={false}>
            <div className="mb-16 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">{t.services.process_title}</h3>
                <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    {t.services.process_desc}
                </p>
            </div>

            <div className="mb-24 grid grid-cols-1 md:grid-cols-4 gap-8">
                {t.services.process.map((step, index) => (
                    <ProcessStep
                        key={step.id}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        delay={index * 200}
                        isLast={index === t.services.process.length - 1}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {t.services.list.map((service, index) => (
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
