import React, { useRef, useState } from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useLanguage } from '../../context/LanguageContext';

// --- COMPONENTE TARJETA CON EFECTO SPOTLIGHT ---
const GlowingBentoCard = ({ testimonial, className }) => {
  const { t } = useLanguage();
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  if (!testimonial) return null;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Borde iluminado */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.4), transparent 40%)`,
          maskImage: 'linear-gradient(black, black)',
          WebkitMaskImage: 'linear-gradient(black, black)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* CONTENIDO */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">

        {/* Comillas */}
        <div className="absolute top-2 right-4 text-7xl text-blue-500/20 font-serif leading-none select-none -z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">
          ”
        </div>

        {/* Header Usuario */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-zinc-700/50 shadow-lg">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-900 rounded-full"></div>
          </div>

          <div>
            <h4 className="font-bold text-white text-base tracking-tight flex items-center gap-1.5">
              {testimonial.name}
              <MdVerified className="text-blue-500 text-sm" title="Cliente verificado" />
            </h4>
            <p className="text-xs font-medium text-blue-400 uppercase tracking-wider">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* --- ESTRELLAS (CON GRADIENTE SVG REAL) --- */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;

            return (
              <span key={i}>
                {testimonial.rating >= ratingValue ? (
                  // ESTRELLA LLENA (Usa el ID del gradiente definido abajo)
                  <FaStar size={14} style={{ fill: "url(#cotton-candy-gradient)" }} />
                ) : testimonial.rating >= ratingValue - 0.5 ? (
                  // MEDIA ESTRELLA (Usa el mismo gradiente)
                  <FaStarHalfAlt size={14} style={{ fill: "url(#cotton-candy-gradient)" }} />
                ) : (
                  // ESTRELLA VACÍA (Color sólido gris)
                  <FaStar size={14} className="text-zinc-800" />
                )}
              </span>
            );
          })}
        </div>

        <p className="text-zinc-300 text-sm md:text-[15px] leading-relaxed italic opacity-90 flex-grow">
          "{testimonial.text}"
        </p>
      </div>
    </div>
  );
};

export const TestimonialsGrid = () => {
  const { t } = useLanguage();
  const safeTestimonials = [...t.testimonials.list, ...t.testimonials.list].slice(0, 5);

  return (
    <div className="w-full relative">

      {/* ✅ DEFINICIÓN DEL GRADIENTE SVG (MODO VERTICAL) 
          x1=0, y1=0 -> x2=0, y2=100 define una línea vertical de arriba a abajo.
      */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="cotton-candy-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" /> {/* Arriba: Rosa */}
            <stop offset="100%" stopColor="#60a5fa" /> {/* Abajo: Azul */}
          </linearGradient>
        </defs>
      </svg>

      {/* Decoración ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">

        <GlowingBentoCard
          testimonial={safeTestimonials[0]}
          className="md:col-span-2 bg-zinc-900/60 backdrop-blur-md"
        />

        <GlowingBentoCard
          testimonial={safeTestimonials[1]}
          className="md:col-span-1"
        />

        <GlowingBentoCard
          testimonial={safeTestimonials[2]}
          className="md:col-span-1 lg:row-span-2 bg-zinc-900/80"
        />

        <GlowingBentoCard
          testimonial={safeTestimonials[3]}
          className="md:col-span-1"
        />

        <GlowingBentoCard
          testimonial={safeTestimonials[4]}
          className="md:col-span-2 bg-zinc-900/60 backdrop-blur-md"
        />
      </div>
    </div>
  );
};
