export interface Technology {
    name: string;
    icon: string;
}

export interface TechnologyCategory {
    category: string;
    items: Technology[];
}

export interface Project {
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    repository: string;
    preview: string;
    stack: Technology[];
}
