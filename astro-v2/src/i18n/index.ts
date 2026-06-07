import { es } from "./es";
import { en } from "./en";

export const ui = {
    es,
    en
};

export type Lang = keyof typeof ui;

export const defaultLang: Lang = "es";
