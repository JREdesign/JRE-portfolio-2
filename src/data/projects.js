import { normalizeProjectsList } from './categories';

export const projectsData = {
    es: {
        title: "Proyectos",
        subtitle: "Mi Trabajo",
        tag_new: "NUEVO",
        badge_new: "Nuevo",
        badge_featured: "Destacado",
        filter_featured: "Destacados",
        filter_all: "Todos",
        category_details_title: "Ver detalles de categoría",
        category_includes: "Incluye",
        no_projects: "No hay proyectos en esta categoría.",
        pagination_prev: "Anterior",
        pagination_next: "Siguiente",
        modal_about: "Sobre el proyecto",
        modal_no_desc: "Sin descripción detallada disponible.",
        modal_details_title: "Diseño y acabado",
        modal_no_details: "Detalles de diseño no disponibles.",
        modal_gallery: "Galería (Clic para ampliar)",

        // Restaurado: 6 categorías exactas + keys originales
        categories: [
            {
                id: 1,
                key: "branding",
                label: "BRANDING",
                order: 20,
                hint: "Identidad de marca: logos, sistemas visuales, identidad corporativa y aplicaciones.",
                includes: ["Logos", "Sistemas visuales", "Identidad corporativa", "Aplicaciones de marca", "Guías de estilo / Brandbook"]
            },
            {
                id: 2,
                key: "graphic-design",
                label: "DISEÑO GRÁFICO",
                order: 10,
                hint: "Cartelería, piezas impresas, stands e identidad aplicada (no puramente digital interactivo).",
                includes: ["Cartelería", "Stands", "Piezas impresas", "Identidad aplicada", "Material corporativo impreso"]
            },
            {
                id: 3,
                key: "editorial",
                label: "EDITORIAL",
                order: 50,
                hint: "Maquetación y publicaciones cuando el peso editorial es protagonista (revistas, publicaciones, retículas).",
                includes: ["Revistas", "Maquetación de publicaciones", "Retículas / Composición editorial", "Dirección de arte editorial", "Preparación para imprenta"]
            },
            {
                id: 4,
                key: "ui-ux",
                label: "UI / UX",
                order: 30,
                hint: "Diseño de interfaces y experiencia: dashboards, productos digitales y apps conceptuales.",
                includes: ["Dashboards", "Productos digitales", "Apps conceptuales", "Wireframes / Prototipos", "Sistemas de diseño UI"]
            },
            {
                id: 5,
                key: "web-dev",
                label: "DESARROLLO WEB",
                order: 40,
                hint: "Frontend-oriented: implemento diseño con tecnologías modernas (React, WebGL/Three, etc.).",
                includes: ["HTML / CSS", "Frontend moderno", "React / Next", "WebGL / Three.js", "Algo de backend (cuando aplica)"]
            },
            {
                id: 6,
                key: "other",
                label: "OTROS",
                order: 60,
                hint: "Proyectos especiales, híbridos o difíciles de encajar en una categoría principal.",
                includes: ["Otros", "Especiales", "Experimentales", "Híbridos"]
            }
        ],

        // Restaurado: categorías por proyecto como en consts-antiguo.js
        list: normalizeProjectsList([
            {
                id: 1,
                title: "Apex Finance",
                subtitle: "UI/UX Dashboard",
                tag: "UI/UX",
                categories: ["ui-ux", "web-dev"],
                isNew: true,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
                description: "Diseño de interfaz para una plataforma de trading. Nos enfocamos en la legibilidad de datos en tiempo real y en un modo oscuro nativo.",
                details: "La interfaz se construyó sobre un sistema de diseño atómico. Los componentes utilizan un contraste AAA para asegurar la accesibilidad, con acabados mate en los paneles de control.",
                gallery: ["https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200", "https://images.unsplash.com/photo-1642132652859-3ef5a9290aa1?q=80&w=1200"]
            },
            {
                id: 2,
                title: "Lumina Magazine",
                subtitle: "Diseño editorial",
                tag: "Editorial",
                categories: ["editorial"],
                isNew: true,
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
                description: "Maquetación y dirección de arte para una revista de arquitectura minimalista.",
                details: "Impresión en papel Fedrigoni de alto gramaje con barniz selectivo UV en los titulares. La retícula suiza permite una composición flexible pero ordenada.",
                gallery: ["https://images.unsplash.com/photo-1507842217121-9e93e5e1e7cd?q=80&w=1200", "https://images.unsplash.com/photo-1586075010999-9bc9e4c5ae36?q=80&w=1200"]
            },
            {
                id: 3,
                title: "Zenith Web",
                subtitle: "Web corporativa 3D",
                tag: "Development",
                categories: ["web-dev", "ui-ux"],
                isNew: true,
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
                description: "Sitio web inmersivo desarrollado con React y Three.js.",
                details: "Optimización de shaders GLSL para un rendimiento fluido a 60fps. Transiciones suaves entre secciones mediante GSAP y acabados visuales con efecto vidrio (glassmorphism).",
                gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"]
            },
            {
                id: 4,
                title: "Echo Packaging",
                subtitle: "Packaging sostenible",
                tag: "Branding",
                categories: ["branding", "graphic-design"],
                isFeatured: true,
                image: "https://images.unsplash.com/photo-1632515904664-88421d097966?q=80&w=1600&auto=format&fit=crop",
                description: "Diseño de empaques biodegradables para cosmética orgánica.",
                details: "Uso de tintas vegetales sobre cartón reciclado post-consumo. El troquelado minimiza el uso de pegamentos, buscando un acabado crudo y natural.",
                gallery: ["https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200"]
            },
            {
                id: 5,
                title: "Velocita App",
                subtitle: "App de movilidad",
                tag: "Product",
                categories: ["ui-ux"],
                isFeatured: true,
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
                description: "Aplicación móvil para alquiler de vehículos eléctricos.",
                details: "Desarrollo de micro-interacciones hápticas para confirmar acciones. El diseño visual prioriza el alto contraste para su uso en exteriores bajo luz solar directa.",
                gallery: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200"]
            },
            {
                id: 6,
                title: "Gecko Aventura",
                subtitle: "Identidad visual & branding",
                tag: "Branding",
                categories: ["branding", "graphic-design", "web-dev"],
                isFeatured: true,
                image: "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-promo.png",
                description: "Branding corporativo para Gecko Aventura orientado a construir una identidad visual moderna...",
                details: "El rebranding se materializa en una identidad integral y coherente...",
                gallery: [
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-promo.png",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-branding.jpg",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-logo-2.jpg",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-logo.jpg",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-logo-sketch.jpg",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/11/gecko-gorra.png",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/11/gecko-webpage.png"
                ]
            }
        ])
    },
    en: {
        title: "Projects",
        subtitle: "My Work",
        tag_new: "NEW",
        badge_new: "New",
        badge_featured: "Featured",
        filter_featured: "Featured",
        filter_all: "All",
        category_details_title: "View category details",
        category_includes: "Includes",
        no_projects: "No projects in this category.",
        pagination_prev: "Previous",
        pagination_next: "Next",
        modal_about: "About the project",
        modal_no_desc: "No detailed description available.",
        modal_details_title: "Design and finish",
        modal_no_details: "Design details not available.",
        modal_gallery: "Gallery (Click to enlarge)",

        // Same 6 categories + original keys (EN version)
        categories: [
            {
                id: 1,
                key: "branding",
                label: "BRANDING",
                order: 20,
                hint: "Brand identity: logos, visual systems, corporate identity and applications.",
                includes: ["Logos", "Visual systems", "Corporate identity", "Brand applications", "Style guides / Brandbook"]
            },
            {
                id: 2,
                key: "graphic-design",
                label: "GRAPHIC DESIGN",
                order: 10,
                hint: "Posters, printed pieces, stands and applied identity (not purely interactive digital).",
                includes: ["Posters", "Stands", "Printed pieces", "Applied identity", "Printed corporate materials"]
            },
            {
                id: 3,
                key: "editorial",
                label: "EDITORIAL",
                order: 50,
                hint: "Layout and publications where editorial weight is key (magazines, publications, grids).",
                includes: ["Magazines", "Publication layout", "Grids / Editorial composition", "Editorial art direction", "Print-ready preparation"]
            },
            {
                id: 4,
                key: "ui-ux",
                label: "UI / UX",
                order: 30,
                hint: "Interface & experience design: dashboards, digital products and conceptual apps.",
                includes: ["Dashboards", "Digital products", "Conceptual apps", "Wireframes / Prototypes", "UI design systems"]
            },
            {
                id: 5,
                key: "web-dev",
                label: "WEB DEVELOPMENT",
                order: 40,
                hint: "Frontend-oriented: I implement design with modern technologies (React, WebGL/Three, etc.).",
                includes: ["HTML / CSS", "Modern frontend", "React / Next", "WebGL / Three.js", "Some backend (when needed)"]
            },
            {
                id: 6,
                key: "other",
                label: "OTHER",
                order: 60,
                hint: "Special, hybrid or hard-to-classify projects.",
                includes: ["Other", "Special", "Experimental", "Hybrid"]
            }
        ],

        list: normalizeProjectsList([
            {
                id: 1,
                title: "Apex Finance",
                subtitle: "UI/UX Dashboard",
                tag: "UI/UX",
                categories: ["ui-ux", "web-dev"],
                isNew: true,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
                description: "Interface design for a trading platform. We focused on real-time data readability and a native dark mode.",
                details: "The interface was built on an atomic design system. Components use AAA contrast to ensure accessibility, with matte finishes on control panels.",
                gallery: ["https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200", "https://images.unsplash.com/photo-1642132652859-3ef5a9290aa1?q=80&w=1200"]
            },
            {
                id: 2,
                title: "Lumina Magazine",
                subtitle: "Editorial Design",
                tag: "Editorial",
                categories: ["editorial"],
                isNew: true,
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
                description: "Layout and art direction for a minimalist architecture magazine.",
                details: "Printed on high-grammage Fedrigoni paper with selective UV varnish on headlines. The Swiss grid allows for a flexible but orderly composition.",
                gallery: ["https://images.unsplash.com/photo-1507842217121-9e93e5e1e7cd?q=80&w=1200", "https://images.unsplash.com/photo-1586075010999-9bc9e4c5ae36?q=80&w=1200"]
            },
            {
                id: 3,
                title: "Zenith Web",
                subtitle: "3D Corporate Web",
                tag: "Development",
                categories: ["web-dev", "ui-ux"],
                isNew: true,
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
                description: "Immersive website developed with React and Three.js.",
                details: "Optimization of GLSL shaders for smooth performance at 60fps. Smooth transitions between sections using GSAP and glassmorphism visual finishes.",
                gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"]
            },
            {
                id: 4,
                title: "Echo Packaging",
                subtitle: "Sustainable Packaging",
                tag: "Branding",
                categories: ["branding", "graphic-design"],
                isFeatured: true,
                image: "https://images.unsplash.com/photo-1632515904664-88421d097966?q=80&w=1600&auto=format&fit=crop",
                description: "Design of biodegradable packaging for organic cosmetics.",
                details: "Use of vegetable inks on post-consumer recycled cardboard. Die-cutting minimizes the use of glues, seeking a raw and natural finish.",
                gallery: ["https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200"]
            },
            {
                id: 5,
                title: "Velocita App",
                subtitle: "Mobility App",
                tag: "Product",
                categories: ["ui-ux"],
                isFeatured: true,
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
                description: "Mobile app for electric vehicle rental.",
                details: "Development of haptic micro-interactions to confirm actions. Visual design prioritizes high contrast for outdoor use under direct sunlight.",
                gallery: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200"]
            },
            {
                id: 6,
                title: "Gecko Aventura",
                subtitle: "Visual Identity & Branding",
                tag: "Branding",
                categories: ["branding", "graphic-design", "web-dev"],
                isFeatured: true,
                image: "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-promo.png",
                description: "Corporate branding for Gecko Aventura aimed at building a modern visual identity...",
                details: "The rebranding is embodied in a comprehensive and coherent identity...",
                gallery: [
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-promo.png",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-branding.jpg",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-logo-2.jpg",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-logo.jpg",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-logo-sketch.jpg",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/11/gecko-gorra.png",
                    "https://jredesigner.wordpress.com/wp-content/uploads/2025/11/gecko-webpage.png"
                ]
            }
        ])
    }
};
