import { en } from "./en/index";
import { es } from "./es/index";

export const ui = {
    es,
    en,
} as const;

export type Lang = keyof typeof ui;
export type Translations = (typeof ui)[Lang];

export function getTranslations(lang: Lang) {
    return ui[lang];
}
