// consts.js
// Datos dinámicos para el Portfolio

const baseProjects = [

  {
    id: 1,
    title: "Apex Finance",
    subtitle: "UI/UX Dashboard",
    tag: "UI/UX",
    isNew: true,
    categories: ["ui-ux", "desarrollo"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    description: "Diseño de interfaz para una plataforma de trading. Nos enfocamos en la legibilidad de datos en tiempo real y en un modo oscuro nativo.",
    details: "La interfaz se construyó sobre un sistema de diseño atómico. Los componentes utilizan un contraste AAA para asegurar la accesibilidad, con acabados mate en los paneles de control.",
    gallery: [
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1200",
      "https://images.unsplash.com/photo-1642132652859-3ef5a9290aa1?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 2,
    title: "Lumina Magazine",
    subtitle: "Diseño editorial",
    tag: "Editorial",
    isNew: true,
    categories: ["editorial", "diseño"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
    description: "Maquetación y dirección de arte para una revista de arquitectura minimalista.",
    details: "Impresión en papel Fedrigoni de alto gramaje con barniz selectivo UV en los titulares. La retícula suiza permite una composición flexible pero ordenada.",
    gallery: [
      "https://images.unsplash.com/photo-1507842217121-9e93e5e1e7cd?q=80&w=1200",
      "https://images.unsplash.com/photo-1586075010999-9bc9e4c5ae36?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 3,
    title: "Zenith Web",
    subtitle: "Web corporativa 3D",
    tag: "Development",
    isNew: true,
    categories: ["desarrollo", "ui-ux"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    description: "Sitio web inmersivo desarrollado con React y Three.js.",
    details: "Optimización de shaders GLSL para un rendimiento fluido a 60fps. Transiciones suaves entre secciones mediante GSAP y acabados visuales con efecto vidrio (glassmorphism).",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 4,
    title: "Echo Packaging",
    subtitle: "Packaging sostenible",
    tag: "Branding",
    isNew: true,
    categories: ["branding", "editorial"],
    image: "https://images.unsplash.com/photo-1632515904664-88421d097966?q=80&w=1600&auto=format&fit=crop",
    description: "Diseño de empaques biodegradables para cosmética orgánica.",
    details: "Uso de tintas vegetales sobre cartón reciclado post-consumo. El troquelado minimiza el uso de pegamentos, buscando un acabado crudo y natural.",
    gallery: [
       "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 5,
    title: "Velocita App",
    subtitle: "App de movilidad",
    tag: "Product",
    isNew: true,
    categories: ["ui-ux", "app"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
    description: "Aplicación móvil para alquiler de vehículos eléctricos.",
    details: "Desarrollo de micro-interacciones hápticas para confirmar acciones. El diseño visual prioriza el alto contraste para su uso en exteriores bajo luz solar directa.",
    gallery: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200"
    ],
    url: "#"
  },
  {
    id: 6,
    title: "Gecko Aventura",
    subtitle: "Identidad visual & branding",
    tag: "Branding",
    // PROPIEDAD NUEVA:
    isNew: true, 
    categories: ["branding", "diseño", "web"],
    image: "https://jredesigner.wordpress.com/wp-content/uploads/2025/03/gecko-promo.png",
    description:
      "Branding corporativo para Gecko Aventura orientado a construir una identidad visual moderna, dinámica y enérgica, alineada con una agencia de viajes centrada en aventura y deportes extremos. La propuesta busca conectar con un público joven y activo, reforzando los valores de aventura, naturaleza y adrenalina mediante una estética fresca y vibrante que destaca en el sector del turismo de experiencias y deja una impresión clara, llamativa y memorable.",
    details:
      "El rebranding se materializa en una identidad integral y coherente, con un logotipo protagonizado por la figura de un gecko como símbolo de adaptabilidad y exploración, una tipografía moderna y cercana que prioriza legibilidad y versatilidad, y una paleta definida por el verde vibrante (#ADF434) —energía, naturaleza y vitalidad— en contraste con un verde oscuro profundo (#07402F) —solidez y profesionalismo—. La identidad se desarrolla para funcionar con consistencia en entornos digitales e impresos, incluyendo iconografía, recursos para redes sociales y aplicaciones de merchandising como las mostradas, y se completa con el desarrollo del FrontEnd de su página web para asegurar una presencia de marca uniforme, potente y reconocible.",
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

// Generamos más proyectos para probar la paginación de 9
window.JRE_PROJECTS = [
    ...baseProjects,
    ...baseProjects.map(p => ({...p, id: p.id + 10, title: p.title + " II", isNew: false})), // Los duplicados no son "nuevos"
    ...baseProjects.map(p => ({...p, id: p.id + 20, title: p.title + " III", isNew: false}))
];

// Asignamos directamente los proyectos base sin duplicar
//window.JRE_PROJECTS = baseProjects;