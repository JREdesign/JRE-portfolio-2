import React, { useRef, useEffect } from 'react';
import { Section } from '../ui/Section';
import { TIMELINE } from '../../data/consts';

export const Timeline = () => {
    const wrapperRef = useRef(null);

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

            const blueLineTip = wrapperTop + wrapperHeight * percentage; // Coordinate in viewport relative

            // Check each item intersection with "blue line tip"
            // Tip: We need to check if the tip has passed the item's top position
            // But since coordinates are relative to viewport in rect.top...
            // current tip Y in viewport = wrapperTop + (percentage * wrapperHeight) = triggerPoint (roughly, when clamped)

            // Actually, let's use the logic from original:
            // const blueLineTip = wrapperTop + wrapperHeight * percentage; (This is correct relative to viewport top if wrapperTop is relative to viewport)
            // But verify: wrapperTop decreases as we scroll down.

            domItems.forEach((itemEl, index) => {
                const itemRect = itemEl.getBoundingClientRect();
                const itemTop = itemRect.top; // Relative to viewport

                // If blue line tip is below the item top (+ offset), activate it
                // triggerPoint is where the "pen" is fixed on screen usually, or the line fills up to that point.
                // In the original code:
                // let percentage = (triggerPoint - wrapperTop) / wrapperHeight;
                // blueLineTip = wrapperTop + wrapperHeight * percentage; (which basically equals triggerPoint unless clamped)

                // Logic:
                const isReached = triggerPoint > itemTop + 50;

                if (itemEl.dataset.electric === "true") {
                    // Special logic for last electric item
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
        // Initial call
        updateProgress();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <Section id="trayectoria" title="Trayectoria" titleCenter={false}>
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

                {TIMELINE.map((item, index) => (
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
                                    <div className="electric-inner-container"> {/* Missing in CSS maybe? Checked original CSS, it was there? */}
                                        {/* Original CSS used .electric-border-outer and main-card directly inside layers? 
                                             Let's match lines 127 in original CSS: 
                                             .electric-layers children were: overlay-1, background-glow.
                                             Wait, check line 964 in original HTML view 'electric-inner-container' was there!
                                             But I removed it in my consolidated CSS probably. 
                                             Let's stick to the structure I copied to CSS. 
                                             My copied CSS has .electric-border-outer and .electric-main-card. 
                                             So structure should be flat inside layers if my CSS expects it.
                                             
                                             Let's re-read CSS I wrote in Step 198: 
                                             .electric-border-outer, .electric-main-card. 
                                         */}
                                        <div className="electric-border-outer">
                                            <div className="electric-main-card" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Logo & Content Structure - Matches logic for Odd/Even matching basic styles */}
                            {/* Note: Original had media query handling row-reverse for ODD items. 
                                My structure: logo-container, text-container. 
                                Original: logo-container, text-container.
                                The flex-direction is handled by CSS .timeline-item:nth-child(odd) .timeline-content { flex-direction: row-reverse; }
                            */}

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 mr-auto items-start w-full">
                                {/* Added relative z-10 to ensure text is above electric layers */}
                                <div className="logo-container">
                                    {/* Use text placeholder if image fails/missing */}
                                    {/* In consts.js I set logo to null. So just render placeholder */}
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
