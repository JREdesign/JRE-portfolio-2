import React from 'react';
import { Section } from '../ui/Section';
import { CardStyle } from '../ui/Card';
import { ABOUT_CARDS } from '../../data/consts';
import { PenTool, BadgeCheck, Layout, Code } from '../ui/Icons';

export const AboutSection = () => {
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
        <Section id="sobre-mi" title="Sobre mí" titleCenter={false}>
            <div className="mb-16">
                <p className="mb-6">
                    Soy un diseñador gráfico multidisciplinar que disfruta dando forma a identidades visuales con carácter y coherencia, tanto en proyectos institucionales como comerciales. Mi trabajo se mueve entre el branding, la creación de interfaces y el desarrollo web con stack MERN, donde encuentro un punto de encuentro natural entre lo visual y lo funcional, ya sea desde el branding, la producción editorial o la comunicación institucional.
                </p>
                <p>
                    Me motiva construir experiencias que comuniquen con claridad y que se sientan fluidas al interactuar. Desde la sensibilidad del diseño hasta la lógica del código, busco que cada detalle aporte a una experiencia de usuario intuitiva, satisfactoria y pensada con intención.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {ABOUT_CARDS.map((card, index) => {
                    const Icon = getIcon(card.icon);
                    return <CardStyle key={card.id || index} icon={Icon} title={card.title} delay={index * 300} />;
                })}
            </div>
        </Section>
    );
};
