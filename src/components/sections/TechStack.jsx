import React, { useEffect } from 'react';
import { TOOLS, AI_TOOLS } from '../../data/consts';
import { useLanguage } from '../../context/LanguageContext';

export const TechStack = () => {
    const { t } = useLanguage();
    useEffect(() => {
        const aiItems = document.querySelectorAll(".ai-item");

        const cleanupFns = [];

        aiItems.forEach((item) => {
            const wrapper = item.querySelector(".icon-wrapper");
            if (!wrapper) return;

            const shine = document.createElement("div");
            shine.className = "card-shine";
            const glare = document.createElement("div");
            glare.className = "card-glare";
            const sparksContainer = document.createElement("div");
            sparksContainer.className = "sparks-container";

            wrapper.appendChild(shine);
            wrapper.appendChild(glare);
            wrapper.appendChild(sparksContainer);

            let sparkInterval;

            const createSpark = () => {
                const spark = document.createElement("div");
                spark.className = "spark";
                spark.style.left = Math.random() * 88 + "px";
                spark.style.bottom = "0px";
                spark.style.setProperty("--drift", (Math.random() - 0.5) * 40 + "px");
                sparksContainer.appendChild(spark);
                setTimeout(() => spark.remove(), 600);
            };

            const handleMove = (e) => {
                const rect = wrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -12;
                const rotateY = ((x - centerX) / centerX) * 12;
                wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                shine.style.backgroundPosition = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
                wrapper.style.setProperty("--pointer-x", `${x}px`);
                wrapper.style.setProperty("--pointer-y", `${y}px`);
            };

            const handleEnter = () => {
                sparkInterval = setInterval(createSpark, 60);
                createSpark();
            };

            const handleLeave = () => {
                clearInterval(sparkInterval);
                sparksContainer.innerHTML = "";
                wrapper.style.transform = "rotateX(0) rotateY(0) scale(1)";
            };

            item.addEventListener("mousemove", handleMove);
            item.addEventListener("mouseenter", handleEnter);
            item.addEventListener("mouseleave", handleLeave);

            cleanupFns.push(() => {
                item.removeEventListener("mousemove", handleMove);
                item.removeEventListener("mouseenter", handleEnter);
                item.removeEventListener("mouseleave", handleLeave);
                clearInterval(sparkInterval);
                if (wrapper.contains(shine)) wrapper.removeChild(shine);
                if (wrapper.contains(glare)) wrapper.removeChild(glare);
                if (wrapper.contains(sparksContainer)) wrapper.removeChild(sparksContainer);
            });
        });

        return () => {
            cleanupFns.forEach(fn => fn());
        };
    }, []);

    return (
        <div className="w-full mt-24 space-y-20">
            <div>
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-2 bg-clip-text text-transparent bg-cotton-candy animate-shine bg-[length:200%_auto]">
                    <span className="w-8 h-1 bg-blue-500 rounded-full" />{t.skills.techStack.title_tech}
                </h3>
                <div className="tech-grid-container">
                    {TOOLS.map((tool, i) => (
                        <div key={i} className="tech-item">
                            <div className="icon-wrapper">
                                <img src={tool.icon} alt={tool.name} className="full-icon" onError={(e) => { e.target.style.display = "none"; }} />
                            </div>
                            <span className="text-zinc-400 text-sm mt-2 font-medium tracking-wide">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-3xl font-extrabold mb-8 flex items-center gap-2 bg-clip-text text-transparent bg-cotton-candy animate-shine bg-[length:200%_auto]">
                    <span className="w-8 h-1 bg-blue-500 rounded-full" />{t.skills.techStack.title_ai}
                </h3>
                <div className="tech-grid-container">
                    {AI_TOOLS.map((tool, i) => (
                        <div key={i} className="tech-item ai-item">
                            <div className="icon-wrapper">
                                <img src={tool.icon} alt={tool.name} className="full-icon" onError={(e) => { e.target.style.display = "none"; }} />
                            </div>
                            <span className="text-zinc-400 text-sm mt-2 font-medium tracking-wide">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
