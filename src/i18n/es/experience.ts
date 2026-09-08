import type { ExperienceTranslations } from "../../types/portfolio";

export const experience: ExperienceTranslations = {
    "tabs": {
        "work": "Experiencia",
        "education": "Educación",
        "certifications": "Certificaciones"
    },
    "labels": {
        "tools": "Tecnologías y herramientas"
    },
    "items": [
        {
            "company": "NTT DATA",
            "role": "Desarrollador de aplicaciones web",
            "tag": "Prácticas",
            "date": "Abril 2025 - Mayo 2026",
            "logoImage": "/images/logos/ntt-data.webp",
            "location": "Sevilla",
            "tools": ["Java", "Spring Boot", "Swagger / OpenAPI", "Postman", "Git/GitHub", "Bases de datos"],
            "description": "Participando en tareas relacionadas con backend, APIs REST y resolución de incidencias.",
            "tasks": [
                "Desarrollo de soft skills: trabajo en equipo, comunicación efectiva, resolución de problemas, adaptabilidad, inteligencia emocional y gestión del tiempo.",
                "Desarrollo y mantenimiento de APIs REST con Spring Boot.",
                "Documentación y pruebas de endpoints con Swagger / OpenAPI y Postman.",
                "Uso de Git y GitHub, trabajo con bases de datos y realización de operaciones CRUD en entornos de desarrollo.",
                "Colaboración en tareas de desarrollo, revisión y resolución de incidencias."
            ]
        },
        {
            "company": "Ayuntamiento de Gines",
            "role": "Técnico de soporte informático",
            "tag": "Prácticas",
            "date": "Marzo 2024 - Junio 2024",
            "logoImage": "/images/logos/ayuntamiento-gines.webp",
            "location": "Gines",
            "tools": ["Hardware", "Software", "Soporte técnico", "Mantenimiento"],
            "description": "Realizando soporte técnico y mantenimiento de equipos.",
            "tasks": [
                "Resolución de incidencias hardware y software en remoto y presencial.",
                "Instalación, actualización y mantenimiento de equipos.",
                "Atención a usuarios y guías rápidas de herramientas."
            ]
        }
    ],
    "education": [
        {
            "title": "Técnico Superior en Desarrollo de Aplicaciones Web",
            "center": "IES Alixar",
            "date": "Graduado en Junio de 2026",
            "tag": "DAW",
            "logoImage": "/images/logos/ies-alixar.webp",
            "tools": ["Java", "Spring Boot", "HTML5", "CSS3", "JavaScript", "Bases de datos"],
            "description": "Formación orientada al desarrollo de aplicaciones web completas, combinando frontend, backend, bases de datos, documentación y despliegue."
        },
        {
            "title": "Técnico en Sistemas Microinformáticos y Redes",
            "center": "IES Alixar",
            "date": "Graduado en Junio de 2024",
            "tag": "SMR",
            "logoImage": "/images/logos/ies-alixar.webp",
            "tools": ["Sistemas", "Redes", "Soporte", "Mantenimiento"],
            "description": "Base técnica en sistemas, redes, mantenimiento de equipos y soporte a usuarios."
        },
    ],
    "certificationItems": [
        {
            "title": "Certificado de Iniciación al desarrollo con IA: Programa con Agentes",
            "center": "Mouredev / BIG school",
            "date": "26 de Junio de 2026",
            "logoImage": "/images/logos/big-school.webp",
            "image": "/images/certificates/certificado-big-school-ia-agentes.webp"
        },
        {
            "title": "Certificado de Iniciación al desarrollo con IA: de 0 a Producción",
            "center": "Mouredev / BIG school",
            "date": "26 de Junio de 2026",
            "logoImage": "/images/logos/big-school.webp",
            "image": "/images/certificates/certificado-big-school-ia-0-a-produccion.webp"
        }
    ]
};
