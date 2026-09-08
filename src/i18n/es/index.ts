import { about } from "./about";
import { common } from "./common";
import { contact } from "./contact";
import { experience } from "./experience";
import { home } from "./home";
import { nav } from "./nav";
import { projects } from "./projects";
import { technologies } from "./technologies";

export const es = {
    ...common,
    nav,
    home,
    about,
    experience,
    technologies,
    projects,
    contact,
} as const;
