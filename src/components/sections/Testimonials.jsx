import React from 'react';
import { Section } from '../ui/Section';
import { TestimonialsGrid } from '../ui/TestimonialsGrid';
import { useLanguage } from '../../context/LanguageContext';

export const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <Section id="testimonios" title={t.testimonials.title} titleCenter={false}>
      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {t.testimonials.intro_title}
        </h3>
        <p className="text-zinc-400 max-w-2xl text-lg">
          {t.testimonials.intro_desc}
        </p>
      </div>
      <TestimonialsGrid />
    </Section>
  );
};