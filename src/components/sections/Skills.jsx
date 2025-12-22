import React, { useRef, useState, useEffect } from 'react';
import { Section } from '../ui/Section';
import { TechStack } from './TechStack';
import { useLanguage } from '../../context/LanguageContext';

// --- HOOK DE INTERSECCIÓN (Reused) ---
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

const SkillBar = ({ name, percentage, delay }) => {
    const [ref, isInView] = useInView({ threshold: 0.2 });
    return (
        <div ref={ref} className="mb-6 last:mb-0">
            <div className="flex justify-between items-end mb-2">
                <span className="text-white font-medium text-sm md:text-base tracking-wide">{name}</span>
                <span className="text-blue-400 font-bold text-sm">{percentage}%</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-[1500ms] ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    style={{ width: isInView ? `${percentage}%` : "0%", transitionDelay: `${delay}ms` }}
                />
            </div>
        </div>
    );
};

export const Skills = () => {
    const { t } = useLanguage();
    return (
        <Section id="habilidades" title={t.skills.title} titleCenter={false}>
            <p className="mb-12 text-zinc-400">{t.skills.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {t.skills.list.map((skill, i) => (
                    <SkillBar key={i} name={skill.name} percentage={skill.pct} delay={i * 100} />
                ))}
            </div>
            <TechStack />
        </Section>
    );
};
