export interface LocalizedText {
    es: string;
    en: string;
}

export interface Technology {
    name: string;
}

export interface TechnologyCategory {
    category: LocalizedText;
    items: readonly Technology[];
}

export interface Project {
    name: string;
    description: LocalizedText;
    image: string;
    imageAlt: LocalizedText;
    logo: string;
    repository: string;
    preview: string;
    stack: readonly Technology[];
}

export interface ExperienceItem {
    company: string;
    role: string;
    tag: string;
    date: string;
    logoImage: string;
    location: string;
    tools: readonly string[];
    description: string;
    tasks: readonly string[];
}

export interface EducationItem {
    title: string;
    center: string;
    date: string;
    tag: string;
    logoImage: string;
    tools: readonly string[];
    description: string;
}

export interface CertificationItem {
    title: string;
    center: string;
    date: string;
    logoImage: string;
    image: string;
}

export interface ExperienceTranslations {
    tabs: {
        work: string;
        education: string;
        certifications: string;
    };
    labels: {
        tools: string;
    };
    items: readonly ExperienceItem[];
    education: readonly EducationItem[];
    certificationItems: readonly CertificationItem[];
}
