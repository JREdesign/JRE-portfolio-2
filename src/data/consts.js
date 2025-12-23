/* -------------------------------------------------------
 CONSTS.JS - Archivo agregador
 Importa datos de sección de archivos modulares y los reexporta
 para mantener la compatibilidad con versiones anteriores.
-------------------------------------------------------- */

// 1. Assets & Tools
export { ASSETS, TOOLS, AI_TOOLS } from './assets';

// 2. Categories & Helpers
export {
    CATEGORIES,
    CATEGORY_LIST,
    CATEGORY_KEYS,
    normalizeCategoryKey,
    normalizeCategoryArray
} from './categories';

// 3. Section Data Imports
import { navbarData } from './navbar';
import { heroData } from './hero';
import { aboutData } from './about';
import { skillsData } from './skills';
import { timelineData } from './timeline';
import { projectsData } from './projects';
import { servicesData } from './services';
import { testimonialsData } from './testimonials';
import { contactData } from './contact';

// 4. Translations Aggregation
export const TRANSLATIONS = {
    es: {
        navbar: navbarData.es,
        hero: heroData.es,
        about: aboutData.es,
        skills: skillsData.es,
        timeline: timelineData.es,
        projects: projectsData.es,
        services: servicesData.es,
        testimonials: testimonialsData.es,
        contact: contactData.es
    },
    en: {
        navbar: navbarData.en,
        hero: heroData.en,
        about: aboutData.en,
        skills: skillsData.en,
        timeline: timelineData.en,
        projects: projectsData.en,
        services: servicesData.en,
        testimonials: testimonialsData.en,
        contact: contactData.en
    }
};
