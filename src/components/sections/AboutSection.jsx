import React from 'react';
import { Section } from '../ui/Section';
import { CardStyle } from '../ui/Card';
import { PenTool, BadgeCheck, Layout, Code } from '../ui/Icons';
import { useLanguage } from '../../context/LanguageContext';

export const AboutSection = () => {
    const { t } = useLanguage();
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'pen': return PenTool;
            case 'badge': return BadgeCheck;
            case 'layout': return Layout;
            case 'code': return Code;
            default: return Code;
        }
    };

    return (
        <Section id="sobre-mi" title={t.about.title} titleCenter={false}>
            <div className="mb-16">
                <p className="mb-6">
                    {t.about.description}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {t.about.cards.map((card, index) => {
                    const Icon = getIcon(card.icon);
                    return <CardStyle key={card.id || index} icon={Icon} title={card.title} delay={index * 300} />;
                })}
            </div>
        </Section>
    );
};
