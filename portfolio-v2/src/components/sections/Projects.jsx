import React, { useState, useMemo, useEffect } from 'react';
import { Section } from '../ui/Section';
import { PROJECTS, CATEGORY_LIST, normalizeCategoryKey } from '../../data/consts';

const ITEMS_PER_PAGE = 9;

// --- MODAL COMPONENT ---
const ImageZoom = ({ src, onClose }) => {
    if (!src) return null;
    return (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" onClick={onClose}>
            <button onClick={onClose} className="absolute top-5 right-5 text-white/50 hover:text-white text-4xl">&times;</button>
            <img src={src} className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} alt="Zoomed" />
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    const [zoomedImg, setZoomedImg] = useState(null);
    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
        return () => { window.removeEventListener("keydown", handleEsc); document.body.style.overflow = ""; };
    }, [onClose]);
    if (!project) return null;

    // Helper to format category names for display
    const formatCategoryName = (catKey) => {
        const cat = CATEGORY_LIST.find(c => c.key === catKey);
        return cat ? cat.label : catKey;
    };

    return (
        <>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 md:p-4">
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

                <div className="relative w-full max-w-[95vw] h-[90vh] md:h-[95vh] flex flex-col bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
                    <button onClick={onClose} className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-white/10 text-white flex items-center justify-center transition-all text-xl">✕</button>

                    <div className="overflow-y-auto h-full scroll-smooth">
                        <div className="w-full h-[50vh] md:h-[65vh] relative shrink-0">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                        {project.tag}
                                    </span>
                                    {project.isNew && (
                                        <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold tracking-widest text-white uppercase bg-red-600/90 rounded border border-red-500/50 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                                            Nuevo
                                        </span>
                                    )}
                                </div>

                                <div className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-2 opacity-80">
                                    {(project.categories || []).map((c) => formatCategoryName(c)).join(" | ")}
                                </div>

                                <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-xl md:text-2xl text-zinc-300 font-light">{project.subtitle}</p>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 max-w-7xl mx-auto">
                            <div className="mb-10">
                                <h4 className="text-sm uppercase tracking-wider text-zinc-500 mb-4 font-bold">Sobre el proyecto</h4>
                                <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-4xl whitespace-pre-line">
                                    {project.description || "Sin descripción detallada disponible."}
                                </p>
                            </div>

                            <div className="mb-12">
                                <h4 className="text-sm uppercase tracking-wider text-zinc-500 mb-4 font-bold">Diseño y acabado</h4>
                                <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-4xl whitespace-pre-line">
                                    {project.details || "Detalles de diseño no disponibles."}
                                </p>
                            </div>

                            {project.gallery && project.gallery.length > 0 && (
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-zinc-500 mb-6 font-bold">Galería (Clic para ampliar)</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                        {project.gallery.map((img, idx) => (
                                            <div key={idx} className="group relative aspect-square rounded-lg overflow-hidden cursor-zoom-in bg-zinc-900 border border-zinc-800" onClick={() => setZoomedImg(img)}>
                                                <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`Gallery ${idx}`} />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ImageZoom src={zoomedImg} onClose={() => setZoomedImg(null)} />
        </>
    );
};

// --- SUB-COMPONENTS ---
const CategoryFilterButton = ({ catKey, label, hint, includes, count, active, onSelect }) => {
    const tooltipId = `cat-tip-${catKey}`;
    return (
        <div className="relative group">
            <button
                type="button"
                onClick={() => onSelect(catKey)}
                aria-describedby={catKey !== "all" ? tooltipId : undefined}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${active
                    ? "bg-zinc-100 text-zinc-900 border-white scale-105 shadow-lg shadow-white/10"
                    : "bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                    }`}
            >
                <span>{label}</span>
                {typeof count === "number" && (
                    <span className={`inline-flex items-center justify-center min-w-[22px] h-[18px] px-1 rounded-full text-[10px] font-bold border ${active ? "border-zinc-900/20 bg-zinc-900/10 text-zinc-900" : "border-zinc-700/60 bg-zinc-950/40 text-zinc-300"
                        }`}>
                        {count}
                    </span>
                )}
            </button>

            {catKey !== "all" && (
                <div
                    id={tooltipId}
                    role="tooltip"
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[280px] z-30 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all"
                >
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-950/95 border-l border-t border-zinc-700/60 rotate-45"></div>
                    <div className="rounded-xl border border-zinc-700/60 bg-zinc-950/95 backdrop-blur-md shadow-xl p-3 text-left">
                        <div className="text-xs font-semibold text-white mb-1">{label}</div>
                        {hint && <div className="text-xs text-zinc-300 leading-snug">{hint}</div>}
                        {includes && includes.length > 0 && (
                            <div className="mt-2 text-[11px] text-zinc-400 leading-snug">
                                <span className="font-semibold text-zinc-300">Incluye:</span> {includes.join(" · ")}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const CategoryInfoPanel = ({ categories, counts, activeCategory, onSelect, isOpen, setIsOpen }) => {
    return (
        <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-5 py-4">
                <div>
                    <h4 className="text-white font-bold text-base md:text-lg">Guía de categorías</h4>
                    <p className="text-zinc-500 text-xs md:text-sm">Qué entra en cada bloque (útil para filtrar rápido).</p>
                </div>
                <button
                    type="button"
                    onClick={() => setIsOpen((v) => !v)}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
                    aria-expanded={isOpen}
                >
                    {isOpen ? "Ocultar" : "Mostrar"}
                </button>
            </div>

            {isOpen && (
                <div className="px-5 pb-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={() => onSelect("all")}
                            className={`text-left rounded-xl border p-4 transition-all ${activeCategory === "all" ? "border-white/40 bg-white/5" : "border-zinc-800 bg-zinc-950/30 hover:border-zinc-600"
                                }`}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="text-white font-bold">Todos</div>
                                <div className="text-xs font-bold text-zinc-300 border border-zinc-700/60 bg-zinc-950/50 px-2 py-0.5 rounded-full">
                                    {counts.all}
                                </div>
                            </div>
                            <p className="text-zinc-400 text-sm mt-2">Muestra todos los proyectos sin filtrar.</p>
                        </button>

                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                type="button"
                                onClick={() => onSelect(cat.key)}
                                className={`text-left rounded-xl border p-4 transition-all ${activeCategory === cat.key ? "border-white/40 bg-white/5" : "border-zinc-800 bg-zinc-950/30 hover:border-zinc-600"
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div className="text-white font-bold">{cat.label}</div>
                                    <div className="text-xs font-bold text-zinc-300 border border-zinc-700/60 bg-zinc-950/50 px-2 py-0.5 rounded-full">{counts[cat.key]}</div>
                                </div>
                                {cat.hint && <p className="text-zinc-400 text-sm mt-2">{cat.hint}</p>}
                                {cat.includes && cat.includes.length > 0 && (
                                    <div className="mt-3">
                                        <div className="text-xs font-semibold text-zinc-300 mb-1">Incluye</div>
                                        <ul className="text-xs text-zinc-500 space-y-1 list-disc list-inside">
                                            {cat.includes.map((it, idx) => (
                                                <li key={idx}>{it}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isCategoryInfoOpen, setIsCategoryInfoOpen] = useState(false);

    // Prepare ordered categories
    const orderedCategories = useMemo(() => {
        return [...CATEGORY_LIST].sort((a, b) => a.order - b.order);
    }, []);

    // Prepare projects with normalized categories
    const projects = useMemo(() => {
        return [...PROJECTS].reverse().map(p => ({
            ...p,
            // Categories are already normalized in PROJECTS export but let's be safe
            categories: p.categories // They are strings
        }));
    }, []);

    // Counts
    const categoryCounts = useMemo(() => {
        const counts = { all: projects.length };
        orderedCategories.forEach((cat) => (counts[cat.key] = 0));
        projects.forEach((p) => {
            (p.categories || []).forEach((k) => {
                if (typeof counts[k] !== "number") counts[k] = 0;
                counts[k] += 1;
            });
        });
        return counts;
    }, [projects, orderedCategories]);

    // Filtering
    const filteredProjects = useMemo(
        () => (activeCategory === "all" ? projects : projects.filter((p) => (p.categories || []).includes(activeCategory))),
        [activeCategory, projects]
    );

    // Pagination
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const currentProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    // Initial mobile check
    useEffect(() => {
        try {
            const isMobile = window.matchMedia && window.matchMedia("(max-width: 767px)").matches;
            if (isMobile) setIsCategoryInfoOpen(true);
        } catch (_) { }
    }, []);

    // Reset page on filter
    useEffect(() => { setCurrentPage(1); }, [activeCategory]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        document.getElementById("portfolio-grid-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <Section id="portfolio" title="Proyectos" titleCenter={false}>
            <div id="portfolio-grid-anchor" className="h-0"></div>

            <CategoryInfoPanel
                categories={orderedCategories}
                counts={categoryCounts}
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
                isOpen={isCategoryInfoOpen}
                setIsOpen={setIsCategoryInfoOpen}
            />

            <div className="flex flex-wrap gap-3 mb-10">
                <CategoryFilterButton
                    catKey="all"
                    label="Todos"
                    count={categoryCounts.all}
                    active={activeCategory === "all"}
                    onSelect={setActiveCategory}
                />
                {orderedCategories.map((cat) => (
                    <CategoryFilterButton
                        key={cat.key}
                        catKey={cat.key}
                        label={cat.label}
                        hint={cat.hint}
                        includes={cat.includes}
                        count={categoryCounts[cat.key]}
                        active={activeCategory === cat.key}
                        onSelect={setActiveCategory}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 min-h-[50vh]">
                {currentProjects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="group relative aspect-[4/3] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"
                    >
                        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        {project.isNew && (
                            <div className="absolute top-4 right-4 z-20">
                                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-red-600 rounded shadow-lg animate-pulse">Nuevo</span>
                            </div>
                        )}

                        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end items-start z-10">
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-2 rounded border border-zinc-600/50 bg-black/40 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-blue-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                {project.tag}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                            <p className="text-zinc-400 text-sm line-clamp-1">{project.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && <p className="text-center text-zinc-600 mt-10">No hay proyectos en esta categoría.</p>}

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-16">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 disabled:opacity-30 disabled:hover:border-zinc-800 transition-all bg-zinc-900/50"
                    >
                        Anterior
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded-full text-sm font-medium min-w-[32px] transition-all border ${currentPage === page
                                ? "bg-zinc-100 text-zinc-900 border-white shadow-lg shadow-white/10"
                                : "bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-1.5 rounded-full text-sm font-medium border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 disabled:opacity-30 disabled:hover:border-zinc-800 transition-all bg-zinc-900/50"
                    >
                        Siguiente
                    </button>
                </div>
            )}

            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </Section>
    );
};
