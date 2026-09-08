/**
 * Colores de tecnologías y herramientas.
 *
 * Se usan como color para:
 * - bordes
 * - hover
 * - fondo de la caja del icono
 *
 * Los nombres deben coincidir con:
 * - technologies.json
 * - projects.json
 * - brandIconPaths de icons.ts
 */
const technologyColors: Record<string, string> = {
    HTML5: "#e34f26",
    CSS3: "#1572b6",
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    Astro: "#bc52ee",
    Sass: "#cc6699",
    Bootstrap: "#7952b3",
    "Tailwind CSS": "#06b6d4",
    Vite: "#646cff",
    Figma: "#f24e1e",
    WordPress: "#21759b",

    Java: "#3b82c4",
    "Spring Boot": "#74c044",
    PHP: "#777bb4",
    Symfony: "#000000",
    Twig: "#bacf29",
    Thymeleaf: "#005f0f",
    "Node.js": "#3c873a",
    MySQL: "#00758f",
    MariaDB: "#354168",
    MongoDB: "#47a248",
    "Swagger / OpenAPI": "#85ea2d",
    Postman: "#ff6c37",

    "IntelliJ IDEA": "#fe315d",
    "Visual Studio Code": "#007acc",
    PhpStorm: "#ab47bc",
    Git: "#f05032",
    GitHub: "#181717",
    Docker: "#2496ed",
    Nginx: "#009639",
    Vercel: "#000000",
    Proxmox: "#e57000",
    Terminal: "#000000",
    ChatGPT: "#10a37f",
    Codex: "#6366f1",
};

/**
 * Devuelve el color principal de una tecnología.
 *
 * Si falta una tecnología aquí, lanzamos error para detectarlo rápido.
 */
export const getTechnologyColor = (name: string) => {
    const color = technologyColors[name];

    if (!color) {
        throw new Error(`Color no registrado para la tecnología: ${name}`);
    }

    return color;
};
