export type Lang = "es" | "en";

export interface LocalizedText {
    es: string;
    en: string;
}

export interface Technology {
    name: string;
    icon: string;
}

export interface TechnologyCategory {
    category: LocalizedText;
    items: Technology[];
}

export interface Project {
    name: string;
    description: LocalizedText;
    image: string;
    imageAlt: LocalizedText;
    repository: string;
    preview: string;
    stack: Technology[];
}
