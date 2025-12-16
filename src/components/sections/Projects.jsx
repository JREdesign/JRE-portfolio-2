import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom'; // ✅ IMPORTANTE: Importamos createPortal
import { Section } from '../ui/Section';
import { PROJECTS, CATEGORY_LIST } from '../../data/consts';

const ITEMS_PER_PAGE = 9;

// --- MODAL COMPONENT (Con Portal) ---
const ImageZoom = ({ src, onClose }) => {
    if (!src) return null;

    // ✅ Usamos Portal para renderizar en document.body
    return createPortal(
        <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" onClick={onClose}>
            {/* Botón de cerrar con z-index alto para asegurar click */}
            <button 
                onClick={onClose} 
                className="absolute top-5 right-5 z-[120] text-white/50 hover:text-white text-4xl p-2"
            >
                &times;
            </button>
            <img src={src} className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl relative z-[110]" onClick={(e) => e.stopPropagation()} alt="Zoomed" />
        </div>,
        document.body
    );
};

const ProjectModal = ({ project, onClose }) => {
    const [zoomedImg, setZoomedImg] = useState(null);
    
    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);
        // Bloqueamos el scroll del body mientras el modal está abierto
        document.body.style.overflow = "hidden";
        return () => { 
            window.removeEventListener("keydown", handleEsc); 
            document.body.style.overflow = ""; 
        };
    }, [onClose]);

    if (!project) return null;

    const formatCategoryName = (catKey) => {
        const cat = CATEGORY_LIST.find(c => c.key === catKey);
        return cat ? cat.label : catKey;
    };

    // ✅ Usamos Portal para renderizar en document.body
    return createPortal(
        <>
            {/* Overlay y contenedor principal con z-[100] para superar al Navbar (z-50) */}
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4">
                
                {/* Fondo oscuro */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

                {/* Modal Card */}
                <div className="relative w-full max-w-[95vw] h-[90vh] md:h-[95vh] flex flex-col bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
                    
                    {/* ❌ BOTÓN DE CERRAR: Ahora está dentro del portal, nada lo tapará */}
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 z-[110] w-12 h-12 rounded-full bg-black/60 hover:bg-zinc-800 border border-white/10 text-white flex items-center justify-center transition-all text-xl backdrop-blur-md"
                    >
                        ✕
                    </button>

                    <div className="overflow-y-auto h-full scroll-smooth">
                        {/* Imagen de cabecera */}
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

                        {/* Contenido */}
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
        </>,
        document.body // 👈 Esto renderiza el modal fuera del root, directamente en el body
    );
};

// --- SUB-COMPONENT: CATEGORY BUTTON (Sin cambios en lógica, solo visuales previos) ---
const CategoryFilterButton = ({ catKey, label, hint, includes, count, active, onSelect }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipId = `cat-tip-${catKey}`;

    const handleInfoClick = (e) => {
        e.stopPropagation();
        setShowTooltip(!showTooltip);
    };

    return (
        <div className="relative group">
            <button
                type="button"
                onClick={() => onSelect(catKey)}
                aria-describedby={catKey !== "all" ? tooltipId : undefined}
                className={`pl-5 pr-3 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${active
                        ? "bg-zinc-100 text-zinc-900 border-white scale-105 shadow-lg shadow-white/10"
                        : "bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                    }`}
            >
                <span className="capitalize">{label.toLowerCase()}</span>

                {catKey !== 'all' && hint && (
                    <div
                        onClick={handleInfoClick}
                        className={`flex items-center justify-center w-5 h-5 rounded-full border cursor-pointer transition-colors z-10 ${active 
                            ? "border-zinc-300 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900" 
                            : "border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"}`}
                        title="Ver detalles de categoría"
                    >
                        <span className="text-[10px] font-serif font-bold italic leading-none mt-[1px]">i</span>
                    </div>
                )}

                {typeof count === "number" && (
                    <span className={`inline-flex items-center justify-center min-w-[22px] h-[18px] px-1 rounded-full text-[10px] font-bold border ${active ? "border-zinc-900/20 bg-zinc-900/10 text-zinc-900" : "border-zinc-700/60 bg-zinc-950/40 text-zinc-300"
                        }`}>
                        {count}
                    </span>
                )}
            </button>

            {catKey !== "all" && (hint || (includes && includes.length > 0)) && (
                <div
                    id={tooltipId}
                    role="tooltip"
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[280px] z-50 transition-all duration-200 
                        ${showTooltip ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0"}`}
                >
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-950/95 border-l border-t border-zinc-700/60 rotate-45"></div>
                    <div className="rounded-xl border border-zinc-700/60 bg-zinc-950/95 backdrop-blur-md shadow-xl p-4 text-left relative">
                        {showTooltip && (
                            <button 
                                onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
                                className="absolute top-2 right-2 text-zinc-500 hover:text-white md:hidden"
                            >
                                ✕
                            </button>
                        )}
                        <div className="text-xs font-bold text-white mb-1 capitalize">{label.toLowerCase()}</div>
                        {hint && <div className="text-xs text-zinc-300 leading-snug mb-2">{hint}</div>}
                        
                        {includes && includes.length > 0 && (
                            <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 leading-snug">
                                <span className="font-semibold text-zinc-300 block mb-1">Incluye:</span> 
                                {includes.join(" · ")}
                            </div>
                        )}
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

    const orderedCategories = useMemo(() => [...CATEGORY_LIST].sort((a, b) => a.order - b.order), []);
    const projects = useMemo(() => [...PROJECTS].reverse().map(p => ({ ...p, categories: p.categories })), []);

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

    const filteredProjects = useMemo(
        () => (activeCategory === "all" ? projects : projects.filter((p) => (p.categories || []).includes(activeCategory))),
        [activeCategory, projects]
    );

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const currentProjects = filteredProjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    useEffect(() => { setCurrentPage(1); }, [activeCategory]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        document.getElementById("portfolio-grid-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <Section id="portfolio" title="Proyectos" titleCenter={false}>
            <div id="portfolio-grid-anchor" className="h-0"></div>

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
            // 1. Contenedor Base:
            // - bg-zinc-950: Fondo oscuro igual que la web para que cuando no pase el rayo, no se vea borde gris.
            // - Sin border: Eliminamos el 'border-zinc-800'.
            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2 bg-zinc-950"
        >
            {/* 2. EL EFECTO SNAKE (Rayo veloz):
                - inset-[-200%]: Lo hacemos gigante para que la rotación parezca lineal en los bordes.
                - spin_1.5s: Mucho más rápido.
                - via-blue-500: El degradado es Transparente -> Azul -> Transparente. Sin cortes bruscos.
            */}
            <div className="absolute inset-[-200%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#3b82f6_50%,#0000_100%)] animate-[spin_1.5s_linear_infinite]" />
            </div>

            {/* 3. MÁSCARA DEL CONTENIDO (La tarjeta en sí):
                - inset-[2px]: Define el grosor del rayo (2px).
                - bg-zinc-900: El color de fondo de la tarjeta.
                - rounded-[10px]: Ajustado para encajar dentro del rounded-xl.
            */}
            <div className="absolute inset-[2px] bg-zinc-900 rounded-[10px] overflow-hidden z-10">
                
                {/* Imagen del proyecto */}
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy" 
                />
                
                {/* Capa oscura para textos */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge Nuevo */}
                {project.isNew && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-red-600 rounded shadow-lg animate-pulse">Nuevo</span>
                    </div>
                )}

                {/* Textos */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end items-start z-10">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-2 rounded border border-zinc-600/50 bg-black/40 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-blue-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {project.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 text-sm line-clamp-1">{project.subtitle}</p>
                </div>
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