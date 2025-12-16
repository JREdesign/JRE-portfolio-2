import jreLogo from '../assets/logo.svg';
import jreLogoColor from '../assets/logo color.svg';
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

// import logoUni from '../assets/logo_uni.svg';
// import logoBeta from '../assets/logo_beta.svg';
// import logoFreelance from '../assets/logo_freelance.svg';
// import logoAlpha from '../assets/logo_alpha.svg';
// import logoTech from '../assets/logo_tech.svg';
// import logoX from '../assets/logo_x.svg';
// import logoGlobal from '../assets/logo_global.svg';

const logoUni = null;
const logoBeta = null;
const logoFreelance = null;
const logoAlpha = null;
const logoTech = null;
const logoX = null;
const logoGlobal = null;

// NOTE: Some assets (logos) might be missing in the asset folder if they weren't in the original list_dir.
// I will use placeholders for now if imports fail, or assumes they exist.
// Looking at the previous LIST_DIR, those logos (logo_uni.svg, etc.) were NOT present in `refactor/assets`.
// They might be missing or I misread.
// The list_dir of `refactor/assets` showed: adobe-firefly.svg, aframe.svg, antigravity.svg, bootstrap.svg, claude.svg, css.svg, docker.svg, figma.svg, framer.svg, gemini.svg, gpt.svg, html.svg, icons.psd, illustrator.svg, indesign.svg, javascript.svg, lovable.svg, midjourney.svg, mongodb.svg, nextjs.svg, nodejs.svg, photoshop.svg, react.svg, tailwind.svg, veo.svg.
// It did NOT show `logo_uni.svg`, `logo_beta.svg`, etc.
// The original `consts.js` referenced them as `assets/logo_uni.svg` etc.
// If they are missing, the build will fail if I import them.
// I will NOT import them for now, but keep strings, and maybe use a default fallback or just string paths if they are in public?
// But since I'm moving assets to src, string paths won't work in Vite unless in public.
// I'll assume they might be intended to be there. But to avoid breaking, I will use a dummy placeholder or string for missing ones.
// Re-reading list_dir: `logo color.svg` and `logo.svg` ARE in `refactor/` root, not assets.
// I need to copy those too.

export const ASSETS = {
    logo: jreLogo,
    logoColor: jreLogoColor
};

/* -------------------------------------------------------
   1) DICCIONARIO CENTRAL DE CATEGORÍAS (NORMALIZADAS)
-------------------------------------------------------- */

export const CATEGORIES = {
    "graphic-design": {
        key: "graphic-design",
        label: "DISEÑO GRÁFICO",
        order: 10,
        hint: "Cartelería, piezas impresas, stands e identidad aplicada (no puramente digital interactivo).",
        includes: ["Cartelería", "Stands", "Piezas impresas", "Identidad aplicada", "Material corporativo impreso"]
    },
    branding: {
        key: "branding",
        label: "BRANDING",
        order: 20,
        hint: "Identidad de marca: logos, sistemas visuales, identidad corporativa y aplicaciones.",
        includes: ["Logos", "Sistemas visuales", "Identidad corporativa", "Aplicaciones de marca", "Guías de estilo / Brandbook"]
    },
    "ui-ux": {
        key: "ui-ux",
        label: "UI / UX",
        order: 30,
        hint: "Diseño de interfaces y experiencia: dashboards, productos digitales y apps conceptuales.",
        includes: ["Dashboards", "Productos digitales", "Apps conceptuales", "Wireframes / Prototipos", "Sistemas de diseño UI"]
    },
    "web-dev": {
        key: "web-dev",
        label: "DESARROLLO WEB",
        order: 40,
        hint: "Frontend-oriented: implemento diseño con tecnologías modernas (React, WebGL/Three, etc.).",
        includes: ["HTML / CSS", "Frontend moderno", "React / Next", "WebGL / Three.js", "Algo de backend (cuando aplica)"]
    },
    editorial: {
        key: "editorial",
        label: "EDITORIAL",
        order: 50,
        hint: "Maquetación y publicaciones cuando el peso editorial es protagonista (revistas, publicaciones, retículas).",
        includes: ["Revistas", "Maquetación de publicaciones", "Retículas / Composición editorial", "Dirección de arte editorial", "Preparación para imprenta"]
    },
    other: {
        key: "other",
        label: "OTROS / ESPECIALES",
        order: 60,
        hint: "Proyectos especiales, híbridos o difíciles de encajar en una categoría principal.",
        includes: ["Otros", "Especiales", "Experimentales", "Híbridos"]
    }
};

export const CATEGORY_LIST = Object.values(CATEGORIES).sort((a, b) => a.order - b.order);
export const CATEGORY_KEYS = CATEGORY_LIST.map((c) => c.key);

const _JRE_ALLOWED_CATS = new Set(["branding", "graphic-design", "editorial", "ui-ux", "web-dev", "other"]);
const _JRE_CATEGORY_ALIASES = {
    brand: "branding", branding: "branding", identidad: "branding", "identidad-visual": "branding", "identidad-corporativa": "branding", logo: "branding", logos: "branding",
    "diseño": "graphic-design", "diseno": "graphic-design", "diseño-grafico": "graphic-design", "diseno-grafico": "graphic-design", "graphic": "graphic-design", "graphic-design": "graphic-design", "design": "graphic-design", "print": "graphic-design", "impresos": "graphic-design", "carteleria": "graphic-design", "cartelería": "graphic-design", "stands": "graphic-design",
    editorial: "editorial", "maquetacion": "editorial", "maquetación": "editorial", "revista": "editorial", "revistas": "editorial", "publicacion": "editorial", "publicación": "editorial", "publicaciones": "editorial",
    "ui-ux": "ui-ux", uiux: "ui-ux", "ui/ux": "ui-ux", ui: "ui-ux", ux: "ui-ux", "product": "ui-ux", "producto-digital": "ui-ux", "dashboard": "ui-ux", "dashboards": "ui-ux", "app": "ui-ux", "apps": "ui-ux",
    web: "web-dev", "web-dev": "web-dev", "desarrollo": "web-dev", development: "web-dev", frontend: "web-dev", "front-end": "web-dev", "react": "web-dev", "three": "web-dev", "threejs": "web-dev", "three-js": "web-dev", "webgl": "web-dev", "html": "web-dev", "css": "web-dev", "javascript": "web-dev",
    other: "other", otros: "other", especiales: "other", especial: "other", misc: "other"
};

function _slugifyCategory(raw) {
    return String(raw || "").trim().toLowerCase().replace(/\s+/g, "-").replace(/[–—_]/g, "-").replace(/\/+/g, "-");
}

export function normalizeCategoryKey(raw) {
    const slug = _slugifyCategory(raw);
    if (_JRE_ALLOWED_CATS.has(slug)) return slug;
    if (_JRE_CATEGORY_ALIASES[slug]) return _JRE_CATEGORY_ALIASES[slug];
    return "other";
}

export function normalizeCategoryArray(arr) {
    const input = Array.isArray(arr) ? arr : [];
    const normalized = input.map(normalizeCategoryKey).filter(Boolean);
    const seen = new Set();
    const unique = [];
    for (const c of normalized) {
        if (!seen.has(c)) { seen.add(c); unique.push(c); }
    }
    return unique.length ? unique : ["other"];
}

const normalizeProject = (project) => ({ ...project, categories: normalizeCategoryArray(project.categories) });

/* -------------------------------------------------------
   3) DATOS
-------------------------------------------------------- */

export const SKILLS = [
    { name: "Diseño Gráfico", pct: 95 },
    { name: "Branding & Identidad", pct: 92 },
    { name: "UI/UX Design", pct: 85 },
    { name: "Desarrollo Web", pct: 78 },
    { name: "Ilustración", pct: 88 },
    { name: "Comunicación Institucional", pct: 90 },
    { name: "Diseño editorial y maquetación", pct: 94 },
    { name: "Diseño de elementos digitales y uso de IA", pct: 88 }
];

export const ABOUT_CARDS = [
    { id: 1, title: "Diseño Gráfico", icon: "pen" },
    { id: 2, title: "Identidad visual y\nBranding", icon: "badge" },
    { id: 3, title: "Diseño UI/UX", icon: "layout" },
    { id: 4, title: "Jr. en Desarrollo\nWeb Full Stack", icon: "code" }
];

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

const baseProjects = [
    {
        id: 1,
        title: "Apex Finance",
        subtitle: "UI/UX Dashboard",
        tag: "UI/UX",
        isNew: true,
        categories: ["ui-ux", "web-dev"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        description: "Diseño de interfaz para una plataforma de trading. Nos enfocamos en la legibilidad de datos en tiempo real y en un modo oscuro nativo.",
        details: "La interfaz se construyó sobre un sistema de diseño atómico. Los componentes utilizan un contraste AAA para asegurar la accesibilidad, con acabados mate en los paneles de control.",
        gallery: ["https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200", "https://images.unsplash.com/photo-1642132652859-3ef5a9290aa1?q=80&w=1200"],
        url: "#"
    },
    {
        id: 2,
        title: "Lumina Magazine",
        subtitle: "Diseño editorial",
        tag: "Editorial",
        isNew: true,
        categories: ["editorial"],
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
        description: "Maquetación y dirección de arte para una revista de arquitectura minimalista.",
        details: "Impresión en papel Fedrigoni de alto gramaje con barniz selectivo UV en los titulares. La retícula suiza permite una composición flexible pero ordenada.",
        gallery: ["https://images.unsplash.com/photo-1507842217121-9e93e5e1e7cd?q=80&w=1200", "https://images.unsplash.com/photo-1586075010999-9bc9e4c5ae36?q=80&w=1200"],
        url: "#"
    },
    {
        id: 3,
        title: "Zenith Web",
        subtitle: "Web corporativa 3D",
        tag: "Development",
        isNew: true,
        categories: ["web-dev", "ui-ux"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
        description: "Sitio web inmersivo desarrollado con React y Three.js.",
        details: "Optimización de shaders GLSL para un rendimiento fluido a 60fps. Transiciones suaves entre secciones mediante GSAP y acabados visuales con efecto vidrio (glassmorphism).",
        gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"],
        url: "#"
    },
    {
        id: 4,
        title: "Echo Packaging",
        subtitle: "Packaging sostenible",
        tag: "Branding",
        isNew: true,
        categories: ["branding", "graphic-design"],
        image: "https://images.unsplash.com/photo-1632515904664-88421d097966?q=80&w=1600&auto=format&fit=crop",
        description: "Diseño de empaques biodegradables para cosmética orgánica.",
        details: "Uso de tintas vegetales sobre cartón reciclado post-consumo. El troquelado minimiza el uso de pegamentos, buscando un acabado crudo y natural.",
        gallery: ["https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200"],
        url: "#"
    },
    {
        id: 5,
        title: "Velocita App",
        subtitle: "App de movilidad",
        tag: "Product",
        isNew: true,
        categories: ["ui-ux"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
        description: "Aplicación móvil para alquiler de vehículos eléctricos.",
        details: "Desarrollo de micro-interacciones hápticas para confirmar acciones. El diseño visual prioriza el alto contraste para su uso en exteriores bajo luz solar directa.",
        gallery: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200"],
        url: "#"
    },
    {
        id: 6,
        title: "Gecko Aventura",
        subtitle: "Identidad visual & branding",
        tag: "Branding",
        isNew: true,
        categories: ["branding", "graphic-design", "web-dev"],
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
        ],
        url: "#"
    }
];

const normalizedBaseProjects = baseProjects.map(normalizeProject);

export const PROJECTS = [
    ...normalizedBaseProjects,
    ...normalizedBaseProjects.map((p) => ({ ...p, id: p.id + 10, title: p.title + " II", isNew: false })),
    ...normalizedBaseProjects.map((p) => ({ ...p, id: p.id + 20, title: p.title + " III", isNew: false }))
];

export const SERVICES = [
    { id: 1, title: "UI Design", description: "Interfaces limpias y modernas que comunican la identidad de tu marca." },
    { id: 2, title: "Development", description: "Código limpio, rápido y escalable usando las últimas tecnologías." },
    { id: 3, title: "Branding", description: "Identidades visuales completas, desde el logo hasta la guía de estilo." },
    { id: 4, title: "Editorial", description: "Todo tipo de publicaciones: revistas, catálogos, libros y más." }
];

export const CONTACT_LINKS = [
    { id: 1, label: "Behance", description: "Portfolio visual completo", url: "#" },
    { id: 2, label: "LinkedIn", description: "Perfil profesional", url: "#" },
    { id: 3, label: "X / Twitter", description: "Contenido diario sobre diseño", url: "#" }
];

export const TIMELINE = [
    {
        id: 1,
        period: "2012 - 2013",
        role: "Becario de Diseño",
        company: "Universidad Local",
        description: "Primer contacto con el mundo profesional...",
        logo: "N/A", // Missing asset
        logoAlt: "Universidad Local",
        isElectric: false
    },
    {
        id: 2,
        period: "2013 - 2015",
        role: "Junior Designer",
        company: "Agencia Creativa Beta",
        description: "Diseño de banners, newsletters y retoque fotográfico...",
        logo: "N/A", // Missing asset
        logoAlt: "Agencia Creativa Beta",
        isElectric: false
    },
    // ... (Other timeline items with missing assets)
    // I will just put placeholder strings or generic icons if allowed.
    // For now leaving as is but without imports to avoid errors.
    {
        id: 3,
        period: "2015 - 2017",
        role: "Freelance Designer",
        company: "Trabajo Independiente",
        description: "Etapa de autonomía gestionando proyectos completos...",
        logo: "N/A",
        logoAlt: "Freelance",
        isElectric: false
    },
    {
        id: 4,
        period: "2017 - 2019",
        role: "UI Specialist",
        company: "StartUp Alpha",
        description: "Foco total en interfaces digitales...",
        logo: "N/A",
        logoAlt: "StartUp Alpha",
        isElectric: false
    },
    {
        id: 5,
        period: "2019 - 2021",
        role: "Frontend Developer",
        company: "Tech Solutions Inc.",
        description: "Salto al código...",
        logo: "N/A",
        logoAlt: "Tech Solutions Inc.",
        isElectric: false
    },
    {
        id: 6,
        period: "2021 - 2023",
        role: "UX/UI Lead",
        company: "Digital Agency X",
        description: "Gestión de equipo de diseño...",
        logo: "N/A",
        logoAlt: "Digital Agency X",
        isElectric: false
    },
    {
        id: 7,
        period: "2023 - Presente",
        role: "Senior Product Designer",
        company: "Global Tech Corp",
        description: "Liderando la visión de producto end-to-end...",
        logo: "N/A",
        logoAlt: "Global Tech Corp",
        isElectric: true
    }
];
