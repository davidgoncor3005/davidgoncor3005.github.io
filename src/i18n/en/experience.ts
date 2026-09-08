import type { ExperienceTranslations } from "../../types/portfolio";

export const experience: ExperienceTranslations = {
    "tabs": {
        "work": "Experience",
        "education": "Education",
        "certifications": "Certifications"
    },
    "labels": {
        "tools": "Technologies and tools"
    },
    "items": [
        {
            "company": "NTT DATA",
            "role": "Web Application Developer",
            "tag": "Internship",
            "date": "April 2025 - May 2026",
            "logoImage": "/images/logos/ntt-data.webp",
            "location": "Seville",
            "tools": ["Java", "Spring Boot", "Swagger / OpenAPI", "Postman", "Git/GitHub", "Databases"],
            "description": "Contributing to backend tasks, REST APIs and issue resolution.",
            "tasks": [
                "Soft skills development: teamwork, effective communication, problem solving, adaptability, emotional intelligence and time management.",
                "Development and maintenance of REST APIs with Spring Boot.",
                "Documentation and endpoint testing with Swagger / OpenAPI and Postman.",
                "Use of Git and GitHub, work with databases and implementation of CRUD operations in development environments.",
                "Collaboration on development, review and issue resolution tasks."
            ]
        },
        {
            "company": "Ayuntamiento de Gines",
            "role": "IT Support Technician",
            "tag": "Internship",
            "date": "March 2024 - June 2024",
            "logoImage": "/images/logos/ayuntamiento-gines.webp",
            "location": "Gines",
            "tools": ["Hardware", "Software", "Technical support", "Maintenance"],
            "description": "Providing technical support and maintaining computer equipment.",
            "tasks": [
                "Remote and on-site hardware and software issue resolution.",
                "Installation, update and maintenance of computer equipment.",
                "User support and quick tool guides."
            ]
        }
    ],
    "education": [
        {
            "title": "Higher Technician in Web Application Development",
            "center": "IES Alixar",
            "date": "Graduated in June 2026",
            "tag": "DAW",
            "logoImage": "/images/logos/ies-alixar.webp",
            "tools": ["Java", "Spring Boot", "HTML5", "CSS3", "JavaScript", "Databases"],
            "description": "Training focused on complete web application development, combining frontend, backend, databases, documentation and deployment."
        },
        {
            "title": "Technician in Microcomputer Systems and Networks",
            "center": "IES Alixar",
            "date": "Graduated in June 2024",
            "tag": "SMR",
            "logoImage": "/images/logos/ies-alixar.webp",
            "tools": ["Systems", "Networks", "Support", "Maintenance"],
            "description": "Technical base in systems, networks, equipment maintenance and user support."
        },
    ],
    "certificationItems": [
        {
            "title": "Certificate of Introduction to AI Development: Program with Agents",
            "center": "Mouredev / BIG school",
            "date": "26 June 2026",
            "logoImage": "/images/logos/big-school.webp",
            "image": "/images/certificates/certificado-big-school-ia-agentes.webp"
        },
        {
            "title": "Certificate of Introduction to AI Development: from 0 to Production",
            "center": "Mouredev / BIG school",
            "date": "26 June 2026",
            "logoImage": "/images/logos/big-school.webp",
            "image": "/images/certificates/certificado-big-school-ia-0-a-produccion.webp"
        }
    ]
};
