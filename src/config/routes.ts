export const routes = {
    home: {
        es: "/",
        en: "/en/",
    },
    about: {
        es: "/sobre-mi",
        en: "/en/about",
    },
    technologies: {
        es: "/tecnologias",
        en: "/en/technologies",
    },
    projects: {
        es: "/proyectos",
        en: "/en/projects",
    },
    contact: {
        es: "/contacto",
        en: "/en/contact",
    },
} as const;

export type RouteKey = keyof typeof routes;
