import React from 'react';

export const Section = ({ id, title, children, bgColor = "bg-transparent", titleCenter = true }) => (
    <section id={id} className={`min-h-screen flex flex-col items-center justify-center relative z-20 px-6 py-24 ${bgColor}`}>
        <div className="max-w-7xl w-full mx-auto">
            <h2 className={`text-5xl md:text-7xl font-extrabold mb-12 flex items-center gap-4 ${titleCenter ? "justify-center" : ""} bg-clip-text text-transparent bg-cotton-candy animate-shine bg-[length:200%_auto]`}>
                <span className="w-12 h-1 bg-blue-500 rounded-full hidden md:block" />
                {title}
            </h2>
            <div className="text-zinc-400 text-lg leading-relaxed w-full">
                {children}
            </div>
        </div>
    </section>
);
