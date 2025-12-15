import React, { useRef, useState, useEffect } from 'react';
import { Layout, Code, BadgeCheck } from './Icons';

// --- FUNCIONES MATEMÁTICAS ---
const clamp = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max);
const round = (value, precision = 3) => parseFloat(value.toFixed(precision));
const centerOfElement = (el) => { const { width, height } = el.getBoundingClientRect(); return [width / 2, height / 2]; };
const distanceFromCenter = (el, x, y) => { const [cx, cy] = centerOfElement(el); return [x - cx, y - cy]; };
const angleFromPointerEvent = (dx, dy) => { let angle = 0; if (dx !== 0 || dy !== 0) { angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90; if (angle < 0) angle += 360; } return angle; };
const closenessToEdge = (el, x, y) => {
    const [cx, cy] = centerOfElement(el);
    const [dx, dy] = distanceFromCenter(el, x, y);
    return clamp(1 / Math.min(dx !== 0 ? cx / Math.abs(dx) : Infinity, dy !== 0 ? cy / Math.abs(dy) : Infinity), 0, 1);
};
const pointerPositionRelativeToElement = (el, e) => {
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    return { pixels: [x, y], percent: [clamp((100 / width) * x), clamp((100 / height) * y)] };
};

// --- HOOK DE INTERSECCIÓN (Internal reused one) ---
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

export const CardStyle = ({ icon: Icon, title, description, delay, centered = true }) => {
    const [ref, isInView] = useInView({ threshold: 0.2 });
    return (
        <div ref={ref} className={`transition-all duration-700 transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${delay}ms` }}>
            <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} justify-center p-8 h-full min-h-[280px] rounded-2xl border border-blue-500/60 bg-[linear-gradient(to_bottom,#111111_0%,#06080d_100%)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group hover:-translate-y-1`}>
                <Icon className={"w-12 h-12 text-white mb-6 stroke-[1.5] group-hover:scale-110 transition-transform duration-300"} />
                <h3 className="text-white font-bold text-xl mb-3 leading-tight whitespace-pre-line">{title}</h3>
                {description && <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>}
            </div>
        </div>
    );
};

export const GlowingServiceCard = ({ title, description, delay }) => {
    const cardRef = useRef(null);
    const [ref, isInView] = useInView({ threshold: 0.2 });

    const handlePointerMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const { pixels, percent } = pointerPositionRelativeToElement(card, e);
        const [px, py] = pixels;
        const [perx, pery] = percent;
        const [dx, dy] = distanceFromCenter(card, px, py);
        const edge = closenessToEdge(card, px, py);
        const angle = angleFromPointerEvent(dx, dy);
        card.style.setProperty("--pointer-x", `${round(perx)}%`);
        card.style.setProperty("--pointer-y", `${round(pery)}%`);
        card.style.setProperty("--pointer-deg", `${round(angle)}deg`);
        card.style.setProperty("--pointer-d", `${round(edge * 100)}`);
    };

    return (
        <div ref={ref} className={`glowing-card-wrapper transition-all duration-700 transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${delay}ms` }}>
            <div ref={cardRef} className="glowing-card group" onPointerMove={handlePointerMove}>
                <span className="glow" />
                <div className="inner">
                    {title.includes("UI") ? (
                        <Layout className="w-12 h-12 text-blue-400 mb-4 stroke-[1.5]" />
                    ) : title.includes("Code") || title.includes("Development") ? (
                        <Code className="w-12 h-12 text-blue-400 mb-4 stroke-[1.5]" />
                    ) : (
                        <BadgeCheck className="w-12 h-12 text-blue-400 mb-4 stroke-[1.5]" />
                    )}
                    <h3 className="text-white font-bold text-2xl mb-4">{title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};
