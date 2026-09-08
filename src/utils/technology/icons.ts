import {
    siAstro,
    siBootstrap,
    siDocker,
    siFigma,
    siGit,
    siGithub,
    siGnubash,
    siHtml5,
    siIntellijidea,
    siJavascript,
    siMariadb,
    siMongodb,
    siMysql,
    siNginx,
    siNodedotjs,
    siPhp,
    siPhpstorm,
    siPostman,
    siProxmox,
    siSass,
    siSpringboot,
    siSwagger,
    siSymfony,
    siTailwindcss,
    siThymeleaf,
    siTypescript,
    siVercel,
    siWordpress,
} from "simple-icons";

/**
 * Tipo que usamos para representar un icono SVG.
 *
 * Un icono puede ser:
 * - string: un único path SVG.
 * - { d, fill }: un path SVG con color propio.
 *
 * Ejemplo simple:
 * "M10 10..."
 *
 * Ejemplo con color:
 * {
 *   d: "M10 10...",
 *   fill: "#ffffff"
 * }
 */
type IconPath = string | { d: string; fill: string };

const javaIconPaths: IconPath[] = [
    "M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z",
    "M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z",
    "M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z",
    "M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z",
    "M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z",
];

const css3IconPath: IconPath =
    "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z";

const templateIconPath: IconPath =
    "M8 3C5.8 3 5 4.2 5 6v3c0 1-.4 2-2 2v2c1.6 0 2 1 2 2v3c0 1.8.8 3 3 3v-2c-.8 0-1-.4-1-1.2v-3.3c0-1.1-.4-2-1.4-2.5 1-.5 1.4-1.4 1.4-2.5V6.2C7 5.4 7.2 5 8 5V3Zm8 0v2c.8 0 1 .4 1 1.2v3.3c0 1.1.4 2 1.4 2.5-1 .5-1.4 1.4-1.4 2.5v3.3c0 .8-.2 1.2-1 1.2v2c2.2 0 3-1.2 3-3v-3c0-1 .4-2 2-2v-2c-1.6 0-2-1-2-2V6c0-1.8-.8-3-3-3Z";

const visualStudioCodeIconPath: IconPath =
    "M23.15 2.59 18.21 .21a1.45 1.45 0 0 0-1.65 .28L7.09 9.12 2.91 5.96a.96 .96 0 0 0-1.23 .06L.35 7.25a.96 .96 0 0 0-.01 1.4L3.96 12 .34 15.35a.96 .96 0 0 0 .01 1.4l1.33 1.23a.96 .96 0 0 0 1.23 .06l4.18-3.16 9.47 8.63c.47 .43 1.15 .54 1.74 .28l4.85-2.33c.52-.25 .85-.78 .85-1.36V3.95c0-.58-.33-1.11-.85-1.36zM18.23 16.96 11.05 12l7.18-4.96v9.92z";

const chatGptIconPath: IconPath =
    "M11.97 2.25a4.1 4.1 0 0 0-3.9 2.86 4.1 4.1 0 0 0-5.27 5.1 4.1 4.1 0 0 0 .46 5.63 4.1 4.1 0 0 0 5.73 4.47 4.1 4.1 0 0 0 6.64-1.12 4.1 4.1 0 0 0 5.27-5.1 4.1 4.1 0 0 0-.46-5.63 4.1 4.1 0 0 0-5.73-4.47 4.1 4.1 0 0 0-2.74-1.74Zm0 1.55c.86 0 1.66.28 2.3.76l-.1.06-3.82 2.2a.77.77 0 0 0-.38.66v4.56l-1.64-.95V7.4c0-1.99 1.62-3.6 3.64-3.6Zm5.78 2.35a2.55 2.55 0 0 1 2.27 3.75l-.1-.06-3.82-2.2a.77.77 0 0 0-.76 0l-3.95 2.28V8.03l3.2-1.85a3.14 3.14 0 0 1 3.16-.03Zm-11.26.1c.02.04.03.08.03.12v4.4c0 .27.15.52.38.66l3.95 2.28-1.64.95-3.2-1.85a3.15 3.15 0 0 1-1.16-4.31 3.15 3.15 0 0 1 1.64-1.4Zm9.18 2.73 3.2 1.85a3.15 3.15 0 0 1 1.16 4.31 3.15 3.15 0 0 1-1.64 1.4 1.2 1.2 0 0 0-.03-.12v-4.4a.77.77 0 0 0-.38-.66l-3.95-2.28 1.64-.95Zm-3.7 2.14 2.03 1.17v2.35l-2.03 1.17-2.03-1.17v-2.35l2.03-1.17Zm-4.1 1.77 3.95 2.28v1.9l-3.2 1.85a3.15 3.15 0 0 1-4.32-1.15 3.15 3.15 0 0 1-.32-2.14l.1.06 3.82 2.2c.23.14.53.14.76 0Zm8.2 2.7v3.7c0 1.99-1.62 3.6-3.64 3.6-.86 0-1.66-.28-2.3-.76l.1-.06 3.82-2.2a.77.77 0 0 0 .38-.66v-4.56l1.64.95Z";

const viteIconPath: IconPath =
    "M8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z";

const codexIconPaths: IconPath[] = [
    "M5.2 7.2 9 12l-3.8 4.8h2.3l3.7-4.8-3.7-4.8Zm8.8 8.1H20v-2h-6Z",
];

/**
 * Mapa principal de iconos.
 *
 * Cada clave debe coincidir exactamente con el nombre usado en:
 * - technologies.json
 * - projects.json
 *
 * Ejemplo:
 * Si en technologies.json aparece:
 * { "name": "Spring Boot" }
 *
 * Aquí debe existir:
 * "Spring Boot": siSpringboot.path
 */
const brandIconPaths: Record<string, IconPath | IconPath[]> = {
    HTML5: siHtml5.path,
    CSS3: css3IconPath,
    JavaScript: siJavascript.path,
    TypeScript: siTypescript.path,
    Astro: siAstro.path,
    Sass: siSass.path,
    Bootstrap: siBootstrap.path,
    "Tailwind CSS": siTailwindcss.path,
    Vite: viteIconPath,
    Figma: siFigma.path,
    WordPress: siWordpress.path,

    Java: javaIconPaths,
    "Spring Boot": siSpringboot.path,
    PHP: siPhp.path,
    Symfony: siSymfony.path,
    Twig: templateIconPath,
    Thymeleaf: siThymeleaf.path,
    "Node.js": siNodedotjs.path,
    MySQL: siMysql.path,
    MariaDB: siMariadb.path,
    MongoDB: siMongodb.path,
    "Swagger / OpenAPI": siSwagger.path,
    Postman: siPostman.path,

    "IntelliJ IDEA": siIntellijidea.path,
    "Visual Studio Code": visualStudioCodeIconPath,
    PhpStorm: siPhpstorm.path,
    Git: siGit.path,
    GitHub: siGithub.path,
    Docker: siDocker.path,
    Nginx: siNginx.path,
    Vercel: siVercel.path,
    Proxmox: siProxmox.path,
    Terminal: siGnubash.path,
    ChatGPT: chatGptIconPath,
    Codex: codexIconPaths,
};

/**
 * ViewBox especial para iconos que no usan el tamaño normal 0 0 24 24.
 *
 * La mayoría de iconos de simple-icons usan 0 0 24 24.
 * Java es distinto, por eso necesita un viewBox propio.
 */
export const brandIconViewBoxes: Record<string, string> = {
    Java: "0 0 128 128",
};

export const getTechnologyViewBox = (name: string) => {
    return brandIconViewBoxes[name] ?? "0 0 24 24";
};

/**
 * Devuelve los paths SVG de una tecnología.
 *
 * Lo importante:
 * - Si el icono es un único string, lo convertimos en array.
 * - Si el icono ya es array, lo devolvemos tal cual.
 *
 * Así los componentes siempre pueden hacer:
 * getTechnologyPaths(name).map(...)
 */
export const getTechnologyPaths = (name: string): IconPath[] => {
    const paths = brandIconPaths[name] ?? [];

    return Array.isArray(paths) ? paths : [paths];
};

/**
 * Comprueba si una tecnología tiene icono registrado.
 *
 * Sirve para evitar pintar un SVG vacío cuando no hay icono.
 */
export const hasTechnologyIcon = (name: string) => {
    return getTechnologyPaths(name).length > 0;
};
