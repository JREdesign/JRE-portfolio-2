/* -------------------------------------------------------
   DICCIONARIO CENTRAL DE CATEGORÍAS (NORMALIZADAS)
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
        label: "OTROS",
        order: 60,
        hint: "Proyectos especiales, híbridos o difíciles de encajar en una categoría principal.",
        includes: ["Otros", "Especiales", "Experimentales", "Híbridos"]
    }
};

export const CATEGORY_LIST = Object.values(CATEGORIES).sort((a, b) => a.order - b.order);
export const CATEGORY_KEYS = CATEGORY_LIST.map((c) => c.key);

const _JRE_ALLOWED_CATS = new Set(["branding", "graphic-design", "editorial", "ui-ux", "web-dev", "other"]);
const _JRE_CATEGORY_ALIASES = {
    // Branding
    brand: "branding",
    branding: "branding",
    identidad: "branding",
    "identidad-visual": "branding",
    "identidad-corporativa": "branding",
    logo: "branding",
    logos: "branding",

    // Diseño gráfico
    "diseño": "graphic-design",
    "diseno": "graphic-design",
    "diseño-grafico": "graphic-design",
    "diseno-grafico": "graphic-design",
    graphic: "graphic-design",
    "graphic-design": "graphic-design",
    design: "graphic-design",
    print: "graphic-design",
    impresos: "graphic-design",
    carteleria: "graphic-design",
    "cartelería": "graphic-design",
    stands: "graphic-design",

    // Alias útiles para “Social Media” si se quedó colado en algún sitio
    social: "graphic-design",
    "social-media": "graphic-design",
    socialmedia: "graphic-design",
    rrss: "graphic-design",
    "redes-sociales": "graphic-design",

    // Editorial
    editorial: "editorial",
    maquetacion: "editorial",
    "maquetación": "editorial",
    revista: "editorial",
    revistas: "editorial",
    publicacion: "editorial",
    "publicación": "editorial",
    publicaciones: "editorial",

    // UI/UX
    "ui-ux": "ui-ux",
    uiux: "ui-ux",
    uiuxdesign: "ui-ux",
    "ui/ux": "ui-ux",
    ui: "ui-ux",
    ux: "ui-ux",
    product: "ui-ux",
    "producto-digital": "ui-ux",
    dashboard: "ui-ux",
    dashboards: "ui-ux",
    app: "ui-ux",
    apps: "ui-ux",

    // Web dev
    web: "web-dev",
    "web-dev": "web-dev",
    desarrollo: "web-dev",
    development: "web-dev",
    frontend: "web-dev",
    "front-end": "web-dev",
    react: "web-dev",
    three: "web-dev",
    threejs: "web-dev",
    "three-js": "web-dev",
    webgl: "web-dev",
    html: "web-dev",
    css: "web-dev",
    javascript: "web-dev",

    // Otros
    other: "other",
    otros: "other",
    especiales: "other",
    especial: "other",
    misc: "other"
};

function _slugifyCategory(raw) {
    return String(raw || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[–—_]/g, "-")
        .replace(/\/+/g, "-");
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
        if (!seen.has(c)) {
            seen.add(c);
            unique.push(c);
        }
    }
    return unique.length ? unique : ["other"];
}

export const normalizeProject = (project) => ({ ...project, categories: normalizeCategoryArray(project.categories) });
export const normalizeProjectsList = (list) => (Array.isArray(list) ? list.map(normalizeProject) : []);
