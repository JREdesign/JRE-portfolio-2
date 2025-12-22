import jreLogo from '../assets/logo.svg';
import logoColor from '../assets/logo-color.png';
import photoshop from '../assets/photoshop.svg';
import illustrator from '../assets/illustrator.svg';
import indesign from '../assets/indesign.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import javascript from '../assets/javascript.svg';
import figma from '../assets/figma.svg';
import bootstrap from '../assets/bootstrap.svg';
import tailwind from '../assets/tailwind.svg';
import reactIcon from '../assets/react.svg';
import nextjs from '../assets/nextjs.svg';
import nodejs from '../assets/nodejs.svg';
import mongodb from '../assets/mongodb.svg';
import aframe from '../assets/aframe.svg';
import framer from '../assets/framer.svg';
import docker from '../assets/docker.svg';
import lovable from '../assets/lovable.svg';
import midjourney from '../assets/midjourney.svg';
import firefly from '../assets/adobe-firefly.svg';
import veo from '../assets/veo.svg';
import antigravity from '../assets/antigravity.svg';
import gpt from '../assets/gpt.svg';
import gemini from '../assets/gemini.svg';
import claude from '../assets/claude.svg';

export const ASSETS = {
    logo: jreLogo,
    logoColor: logoColor
};

export const TOOLS = [
    { name: "Photoshop", icon: photoshop },
    { name: "Illustrator", icon: illustrator },
    { name: "InDesign", icon: indesign },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "Figma", icon: figma },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Tailwind", icon: tailwind },
    { name: "React", icon: reactIcon },
    { name: "Next.js", icon: nextjs },
    { name: "Node.js", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "A-Frame", icon: aframe },
    { name: "Framer", icon: framer },
    { name: "Docker", icon: docker }
];

export const AI_TOOLS = [
    { name: "Lovable", icon: lovable },
    { name: "Midjourney", icon: midjourney },
    { name: "Firefly", icon: firefly },
    { name: "Veo", icon: veo },
    { name: "Antigravity", icon: antigravity },
    { name: "GPT", icon: gpt },
    { name: "Gemini", icon: gemini },
    { name: "Claude", icon: claude }
];

export const TRANSLATIONS = {
    es: {
        navbar: {
            title: "JRΞdesign",
            subtitle: "Diseño gráfico y Desarrollo web",
            links: [
                { name: "Sobre mí", href: "#sobre-mi" },
                { name: "Habilidades", href: "#habilidades" },
                { name: "Trayectoria", href: "#trayectoria" },
                { name: "Proyectos", href: "#portfolio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Contacto", href: "#contacto" }
            ],
            languageLabel: "Idioma / Language"
        },
        hero: {
            greeting: "Hola, soy",
            role: "Diseñador Gráfico & Full Stack Developer",
            description: "Transformando ideas en experiencias digitales memorables a través del diseño estratégico y el código creativo.",
            cta_work: "Ver Proyectos",
            cta_contact: "Contactar"
        },
        about: {
            title: "Sobre mí",
            subtitle: "Mi Enfoque",
            description: "Soy un diseñador multidisciplinar apasionado por la intersección entre la estética visual y la funcionalidad técnica. Con más de 10 años de experiencia en el sector creativo.",
            cards: [
                { id: 1, title: "Diseño Gráfico", icon: "pen" },
                { id: 2, title: "Identidad visual y\nBranding", icon: "badge" },
                { id: 3, title: "Diseño UI/UX", icon: "layout" },
                { id: 4, title: "Jr. en Desarrollo\nWeb Full Stack", icon: "code" }
            ]
        },
        skills: {
            title: "Habilidades",
            subtitle: "Herramientas y Conocimientos",
            list: [
                { name: "Diseño Gráfico", pct: 95 },
                { name: "Branding & Identidad", pct: 92 },
                { name: "UI/UX Design", pct: 85 },
                { name: "Desarrollo Web", pct: 78 },
                { name: "Ilustración", pct: 88 },
                { name: "Comunicación Institucional", pct: 90 },
                { name: "Diseño editorial y maquetación", pct: 94 },
                { name: "Diseño de elementos digitales y uso de IA", pct: 88 }
            ],
            techStack: {
                title_tech: "Tecnologías / Herramientas",
                title_ai: "Inteligencia Artificial"
            }
        },
        timeline: {
            title: "Trayectoria",
            list: [
                {
                    id: 1,
                    period: "2012 - 2013",
                    role: "Becario de Diseño",
                    company: "Universidad Local",
                    description: "Primer contacto con el mundo profesional...",
                },
                {
                    id: 2,
                    period: "2013 - 2015",
                    role: "Junior Designer",
                    company: "Agencia Creativa Beta",
                    description: "Diseño de banners, newsletters y retoque fotográfico...",
                },
                {
                    id: 3,
                    period: "2015 - 2017",
                    role: "Freelance Designer",
                    company: "Trabajo Independiente",
                    description: "Etapa de autonomía gestionando proyectos completos...",
                },
                {
                    id: 4,
                    period: "2017 - 2019",
                    role: "UI Specialist",
                    company: "StartUp Alpha",
                    description: "Foco total en interfaces digitales...",
                },
                {
                    id: 5,
                    period: "2019 - 2021",
                    role: "Frontend Developer",
                    company: "Tech Solutions Inc.",
                    description: "Salto al código...",
                },
                {
                    id: 6,
                    period: "2021 - 2023",
                    role: "UX/UI Lead",
                    company: "Digital Agency X",
                    description: "Gestión de equipo de diseño...",
                },
                {
                    id: 7,
                    period: "2023 - Presente",
                    role: "Senior Product Designer",
                    company: "Global Tech Corp",
                    description: "Liderando la visión de producto end-to-end...",
                    isElectric: true
                }
            ]
        },
        projects: {
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
            categories: [
                { id: 1, key: "branding", label: "Branding", order: 2, hint: "Identidad visual completa y estrategia de marca.", includes: ["Logotipo", "Paleta de colores", "Tipografía", "Manual de marca"] },
                { id: 2, key: "editorial", label: "Editorial", order: 3, hint: "Diseño de publicaciones impresas y digitales.", includes: ["Revistas", "Libros", "Catálogos", "Memorias anuales"] },
                { id: 3, key: "uiux", label: "UI/UX", order: 4, hint: "Diseño de interfaces y experiencia de usuario.", includes: ["App Design", "Web Design", "Prototipado", "User Flow"] },
                { id: 4, key: "development", label: "Development", order: 5, hint: "Desarrollo web y soluciones tecnológicas.", includes: ["React", "Node.js", "Full-stack", "Web 3D"] },
                { id: 5, key: "social", label: "Social Media", order: 6, hint: "Contenido estratégico para redes sociales.", includes: ["Posts", "Stories", "Ads", "Templates"] }
            ],
            list: [
                {
                    id: 1,
                    title: "Apex Finance",
                    subtitle: "UI/UX Dashboard",
                    tag: "UI/UX",
                    categories: ["uiux"],
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
                    categories: ["development"],
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
                    categories: ["branding"],
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
                    categories: ["uiux"],
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
                    categories: ["branding"],
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
            ]
        },
        services: {
            title: "Servicios",
            process_title: "Mi Proceso de Trabajo",
            process_desc: "Soluciones integrales de diseño y comunicación visual para empresas, instituciones y emprendedores que buscan destacar en su mercado.",
            process: [
                { id: 1, number: "01", title: "Estrategia Primero", description: "Cada proyecto comienza con una comprensión profunda de tus objetivos y audiencia." },
                { id: 2, number: "02", title: "Diseño Centrado en Resultados", description: "No solo creamos algo bonito, sino algo que funciona y genera impacto." },
                { id: 3, number: "03", title: "Implementación Completa", description: "Desde la conceptualización hasta la entrega final con todos los archivos necesarios." },
                { id: 4, number: "04", title: "Soporte Continuo", description: "Te acompaño en la implementación y evolución de tu identidad visual." }
            ],
            list: [
                { id: 1, title: "Diseño UI", description: "Interfaces limpias y modernas que comunican la identidad de tu marca." },
                { id: 2, title: "Desarrollo", description: "Código limpio, rápido y escalable usando las últimas tecnologías." },
                { id: 3, title: "Branding", description: "Identidades visuales completas, desde el logo hasta la guía de estilo." },
                { id: 4, title: "Editorial", description: "Todo tipo de publicaciones: revistas, catálogos, libros y más." }
            ]
        },
        testimonials: {
            title: "Testimonios",
            intro_title: "Lo que dicen mis clientes",
            intro_desc: "Historias reales de colaboración, retos superados y objetivos cumplidos.",
            list: [
                { id: 1, name: "Daniel Clifford", role: "CEO en TechStart", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop", rating: 5, text: "Recibí una propuesta de diseño que superó todas mis expectativas. La atención al detalle en la interfaz de usuario es impresionante. Sin duda, ha elevado el valor de nuestro producto." },
                { id: 2, name: "Jonathan Walters", role: "Director Creativo", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop", rating: 4.5, text: "El equipo fue muy solidario y mantuvo la motivación alta. La entrega fue puntual y la comunicación fluida en todo momento." },
                { id: 3, name: "Kira Whittle", role: "Product Owner", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", rating: 5, text: "Una experiencia transformadora. No sabía exactamente qué necesitaba mi marca hasta que vi la propuesta visual. ¡Altamente recomendado!" },
                { id: 4, name: "Jeanette Harmon", role: "Marketing Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop", rating: 4, text: "Gracias por esta experiencia maravillosa. Ahora tenemos una identidad visual que realmente nos representa y nos diferencia de la competencia." },
                { id: 5, name: "Patrick Abrams", role: "Desarrollador Senior", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", rating: 5, text: "El soporte técnico y la calidad del código entregado son de primera categoría. Es fácil escalar el proyecto gracias a la estructura limpia que implementaron." }
            ]
        },
        contact: {
            title: "Contacto",
            subtitle: "Hablemos",
            description: "¿Tienes un proyecto en mente? Me encantaría charlar sobre cómo puedo ayudarte.",
            form_title: "Cuéntame sobre tu proyecto",
            form_subtitle: "Completa el formulario y empecemos a crear algo único.",
            benefit_1_title: "Respuesta en 24h",
            benefit_1_text: "Te respondo rápidamente",
            benefit_2_title: "Consulta gratuita",
            benefit_2_text: "Primera reunión sin costo",
            benefit_3_title: "Propuesta a medida",
            benefit_3_text: "Adaptada a tu presupuesto",
            info_location_title: "Ubicación",
            info_location_text: "Madrid, España",
            info_location_sub: "Disponibilidad remota global",
            info_email_title: "Email",
            info_email_sub: "Soporte rápido",
            info_hours_title: "Horario",
            info_hours_text: "Lunes - Viernes: 9:00 - 15:00 (CET)",
            info_hours_sub: "Urgencias fines de semana",
            social_title: "Conecta conmigo",
            social_subtitle: "Explora mi trabajo en otras plataformas.",
            copyright: "Todos los derechos reservados.",
            form_name: "Nombre *",
            form_name_placeholder: "Tu nombre completo",
            form_email: "Email *",
            form_email_placeholder: "tu@email.com",
            form_company: "Empresa / Organización",
            form_company_placeholder: "Nombre de tu empresa (opcional)",
            form_type: "Tipo de proyecto *",
            form_type_select: "Selecciona el tipo",
            form_budget: "Presupuesto",
            form_budget_select: "Selecciona rango",
            form_details: "Detalles del proyecto *",
            form_details_placeholder: "Describe tu proyecto: objetivos, audiencia, estilo preferido...",
            form_submit: "Enviar Mensaje",
            links: [
                { id: 1, label: "Behance", description: "Portfolio visual completo", url: "#" },
                { id: 2, label: "LinkedIn", description: "Perfil profesional", url: "https://linkedin.com/in/jorge-rev-eug" },
                { id: 3, label: "X / Twitter", description: "Contenido diario sobre diseño", url: "https://x.com/jre_design" },
                { id: 4, label: "GitHub", description: "Repositorios y código", url: "https://github.com/JREdesign/" }
            ]
        }
    },
    en: {
        navbar: {
            title: "JRΞdesign",
            subtitle: "Graphic Design & Web Development",
            links: [
                { name: "About me", href: "#sobre-mi" },
                { name: "Skills", href: "#habilidades" },
                { name: "Experience", href: "#trayectoria" },
                { name: "Projects", href: "#portfolio" },
                { name: "Services", href: "#servicios" },
                { name: "Contact", href: "#contacto" }
            ],
            languageLabel: "Language / Idioma"
        },
        hero: {
            greeting: "Hi, I am",
            role: "Graphic Designer & Full Stack Developer",
            description: "Transforming ideas into memorable digital experiences through strategic design and creative code.",
            cta_work: "View Projects",
            cta_contact: "Contact"
        },
        about: {
            title: "About me",
            subtitle: "My Approach",
            description: "I am a multidisciplinary designer passionate about the intersection between visual aesthetics and technical functionality. With over 10 years of experience in the creative sector.",
            cards: [
                { id: 1, title: "Graphic Design", icon: "pen" },
                { id: 2, title: "Visual Identity &\nBranding", icon: "badge" },
                { id: 3, title: "UI/UX Design", icon: "layout" },
                { id: 4, title: "Jr. Full Stack Web\nDeveloper", icon: "code" }
            ]
        },
        skills: {
            title: "Skills",
            subtitle: "Tools and Knowledge",
            list: [
                { name: "Graphic Design", pct: 95 },
                { name: "Branding & Identity", pct: 92 },
                { name: "UI/UX Design", pct: 85 },
                { name: "Web Development", pct: 78 },
                { name: "Illustration", pct: 88 },
                { name: "Institutional Communication", pct: 90 },
                { name: "Editorial Design & Layout", pct: 94 },
                { name: "Digital Elements & AI", pct: 88 }
            ],
            techStack: {
                title_tech: "Technologies / Tools",
                title_ai: "Artificial Intelligence"
            }
        },
        timeline: {
            title: "Experience",
            list: [
                {
                    id: 1,
                    period: "2012 - 2013",
                    role: "Design Intern",
                    company: "Local University",
                    description: "First contact with the professional world...",
                },
                {
                    id: 2,
                    period: "2013 - 2015",
                    role: "Junior Designer",
                    company: "Creative Agency Beta",
                    description: "Design of banners, newsletters and photo retouching...",
                },
                {
                    id: 3,
                    period: "2015 - 2017",
                    role: "Freelance Designer",
                    company: "Independent Work",
                    description: "Autonomy stage managing full projects...",
                },
                {
                    id: 4,
                    period: "2017 - 2019",
                    role: "UI Specialist",
                    company: "StartUp Alpha",
                    description: "Total focus on digital interfaces...",
                },
                {
                    id: 5,
                    period: "2019 - 2021",
                    role: "Frontend Developer",
                    company: "Tech Solutions Inc.",
                    description: "Jump to code...",
                },
                {
                    id: 6,
                    period: "2021 - 2023",
                    role: "UX/UI Lead",
                    company: "Digital Agency X",
                    description: "Design team management...",
                },
                {
                    id: 7,
                    period: "2023 - Present",
                    role: "Senior Product Designer",
                    company: "Global Tech Corp",
                    description: "Leading the end-to-end product vision...",
                    isElectric: true
                }
            ]
        },
        projects: {
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
            categories: [
                { id: 1, key: "branding", label: "Branding", order: 2, hint: "Complete visual identity and brand strategy.", includes: ["Logo", "Color Palette", "Typography", "Brand Manual"] },
                { id: 2, key: "editorial", label: "Editorial", order: 3, hint: "Layout for print and digital publications.", includes: ["Magazines", "Books", "Catalogs", "Annual Reports"] },
                { id: 3, key: "uiux", label: "UI/UX", order: 4, hint: "Interface design and user experience.", includes: ["App Design", "Web Design", "Prototyping", "User Flow"] },
                { id: 4, key: "development", label: "Development", order: 5, hint: "Web development and technological solutions.", includes: ["React", "Node.js", "Full-stack", "3D Web"] },
                { id: 5, key: "social", label: "Social Media", order: 6, hint: "Strategic content for social networks.", includes: ["Posts", "Stories", "Ads", "Templates"] }
            ],
            list: [
                {
                    id: 1,
                    title: "Apex Finance",
                    subtitle: "UI/UX Dashboard",
                    tag: "UI/UX",
                    categories: ["uiux"],
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
                    categories: ["development"],
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
                    categories: ["branding"],
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
                    categories: ["uiux"],
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
                    categories: ["branding"],
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
            ]
        },
        services: {
            title: "Services",
            process_title: "My Work Process",
            process_desc: "Comprehensive design and visual communication solutions for companies, institutions, and entrepreneurs looking to stand out in their market.",
            process: [
                { id: 1, number: "01", title: "Strategy First", description: "Every project starts with a deep understanding of your goals and audience." },
                { id: 2, number: "02", title: "Results-Centered Design", description: "We don't just create something beautiful, but something that works and generates impact." },
                { id: 3, number: "03", title: "Full Implementation", description: "From conceptualization to final delivery with all necessary files." },
                { id: 4, number: "04", title: "Continuous Support", description: "I accompany you in the implementation and evolution of your visual identity." }
            ],
            list: [
                { id: 1, title: "UI Design", description: "Clean and modern interfaces that communicate your brand's identity." },
                { id: 2, title: "Development", description: "Clean, fast, and scalable code using the latest technologies." },
                { id: 3, title: "Branding", description: "Complete visual identities, from logo to style guide." },
                { id: 4, title: "Editorial", description: "All types of publications: magazines, catalogs, books, and more." }
            ]
        },
        testimonials: {
            title: "Testimonials",
            intro_title: "What my clients say",
            intro_desc: "Real stories of collaboration, overcome challenges, and met goals.",
            list: [
                { id: 1, name: "Daniel Clifford", role: "CEO at TechStart", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop", rating: 5, text: "I received a design proposal that exceeded all my expectations. The attention to detail in the UI is impressive. It has definitely raised our product's value." },
                { id: 2, name: "Jonathan Walters", role: "Creative Director", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop", rating: 4.5, text: "The team was very supportive and kept motivation high. Delivery was on time and communication was seamless." },
                { id: 3, name: "Kira Whittle", role: "Product Owner", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop", rating: 5, text: "A transformative experience. I didn't know exactly what my brand needed until I saw the visual proposal. Highly recommended!" },
                { id: 4, name: "Jeanette Harmon", role: "Marketing Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop", rating: 4, text: "Thank you for this wonderful experience. We now have a visual identity that truly represents us and sets us apart." },
                { id: 5, name: "Patrick Abrams", role: "Senior Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", rating: 5, text: "Technical support and code quality are top-notch. It's easy to scale the project thanks to the clean structure they implemented." }
            ]
        },
        contact: {
            title: "Contact",
            subtitle: "Let's Talk",
            description: "Have a project in mind? I'd love to chat about how I can help you.",
            form_title: "Tell me about your project",
            form_subtitle: "Fill out the form and let's start creating something unique.",
            benefit_1_title: "24h Response",
            benefit_1_text: "I respond to you quickly",
            benefit_2_title: "Free consultation",
            benefit_2_text: "First meeting at no cost",
            benefit_3_title: "Tailored proposal",
            benefit_3_text: "Adapted to your budget",
            info_location_title: "Location",
            info_location_text: "Madrid, Spain",
            info_location_sub: "Global remote availability",
            info_email_title: "Email",
            info_email_sub: "Fast support",
            info_hours_title: "Hours",
            info_hours_text: "Monday - Friday: 9:00 - 15:00 (CET)",
            info_hours_sub: "Weekend emergencies",
            social_title: "Connect with me",
            social_subtitle: "Explore my work on other platforms.",
            copyright: "All rights reserved.",
            form_name: "Name *",
            form_name_placeholder: "Your full name",
            form_email: "Email *",
            form_email_placeholder: "you@email.com",
            form_company: "Company / Organization",
            form_company_placeholder: "Your company name (optional)",
            form_type: "Project type *",
            form_type_select: "Select type",
            form_budget: "Budget",
            form_budget_select: "Select range",
            form_details: "Project details *",
            form_details_placeholder: "Describe your project: goals, audience, preferred style...",
            form_submit: "Send Message",
            links: [
                { id: 1, label: "Behance", description: "Complete visual portfolio", url: "#" },
                { id: 2, label: "LinkedIn", description: "Professional profile", url: "https://linkedin.com/in/jorge-rev-eug" },
                { id: 3, label: "X / Twitter", description: "Daily design content", url: "https://x.com/jre_design" },
                { id: 4, label: "GitHub", description: "Repos and code", url: "https://github.com/JREdesign/" }
            ]
        }
    }
};