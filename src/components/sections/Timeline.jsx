import React, { useRef, useEffect } from 'react';
import { Section } from '../ui/Section';
import { useLanguage } from '../../context/LanguageContext';

export const Timeline = () => {
    const wrapperRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const progressLine = wrapper.querySelector(".timeline-progress");
        const domItems = wrapper.querySelectorAll(".timeline-item");
        let electricEffectTriggered = false;

        // VISIBILITY OBSERVER (Fade in on scroll)
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: "0px", threshold: 0.15 });

        domItems.forEach((el) => observer.observe(el));

        // PROGRESS LINE LOGIC
        const updateProgress = () => {
            const rect = wrapper.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.55; // 55% of viewport
            const wrapperTop = rect.top;
            const wrapperHeight = rect.height;

            let percentage = (triggerPoint - wrapperTop) / wrapperHeight;
            percentage = Math.max(0, Math.min(1, percentage));

            if (progressLine) {
                progressLine.style.height = `${percentage * 100}%`;
            }

            domItems.forEach((itemEl) => {
                const itemRect = itemEl.getBoundingClientRect();
                const itemTop = itemRect.top; // Relative to viewport

                const isReached = triggerPoint > itemTop + 50;

                if (itemEl.dataset.electric === "true") {
                    if (isReached && !electricEffectTriggered) {
                        electricEffectTriggered = true;
                        itemEl.classList.add("electric-active");
                    }
                } else {
                    if (isReached) itemEl.classList.add("active");
                    else itemEl.classList.remove("active");
                }
            });
        };

        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);
        updateProgress();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <Section id="trayectoria" title={t.timeline.title} titleCenter={false}>
            {/* SVG Filter for Electric Effect (Hidden Global Definition) */}
            <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                <defs>
                    <filter id="turbulent-displace" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" seed="1" result="noise1" />
                        <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                            <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" />
                        </feOffset>
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" seed="1" result="noise2" />
                        <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                            <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" />
                        </feOffset>
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" seed="2" result="noise3" />
                        <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
                            <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" />
                        </feOffset>
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" seed="2" result="noise4" />
                        <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
                            <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" />
                        </feOffset>
                        <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                        <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                        <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
                        <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
                    </filter>
                </defs>
            </svg>

            <div ref={wrapperRef} className="timeline-wrapper">
                <div className="timeline-line-container">
                    <div className="timeline-progress" />
                </div>

                {t.timeline.list.map((item, index) => (
                    <div
                        key={item.id || index}
                        className="timeline-item"
                        data-electric={item.isElectric ? "true" : "false"}
                    >
                        <div className={`timeline-content ${item.isElectric ? "electric-card-container" : ""}`}>

                            {item.isElectric && (
                                <div className="electric-layers">
                                    <div className="electric-background-glow" />
                                    <div className="electric-overlay-1" />
                                    <div className="electric-inner-container">
                                        <div className="electric-border-outer">
                                            <div className="electric-main-card" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 mr-auto items-start w-full">
                                <div className="logo-container">
                                    <span className="text-xs font-mono text-zinc-500">{item.company.substring(0, 2).toUpperCase()}</span>
                                </div>
                                <div className="text-container">
                                    <span className={`${item.isElectric ? "text-blue-300" : "text-blue-400"} font-mono text-xs font-bold tracking-wide uppercase mb-2 block`}>
                                        {item.period}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                                    <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">{item.company}</h4>
                                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
