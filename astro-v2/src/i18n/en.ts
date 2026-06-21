export const en = {
    meta: {
        title: "David González Córdoba | Junior Web Developer",
        description:
            "Professional portfolio of David González Córdoba, junior web developer with a Higher Degree in Web Application Development. Projects with Astro, Spring Boot, Symfony, REST APIs and GitHub Pages."
    },

    nav: {
        about: "About me",
        experience: "Experience",
        technologies: "Technologies",
        projects: "Projects",
        contact: "Contact"
    },

    hero: {
        badge: "Open to work",
        titlePrefix: "Hi! I'm",
        name: "David González Córdoba",
        avatarAlt: "Photo of David González Córdoba",
        subtitle: "Junior Web Developer | Higher Degree in Web Application Development.",
        description:
            "I enjoy building useful, well-structured and maintainable web applications. I am focused on growing as a developer and applying real development, documentation and deployment best practices.",
        projectsButton: "View projects",
        cvButton: "Download CV",
        githubButton: "GitHub",
        linkedinButton: "LinkedIn",
        contactButton: "Contact me"
    },

    about: {
        title: "About me",
        intro: {
            beforeBackend: "I am a junior web developer especially interested in ",
            backend: "backend development with Java, Spring Boot and REST APIs",
            beforeFrontend: ", while also working with ",
            frontend: "frontend",
            beforeDatabases: ", ",
            databases: "databases",
            beforeDocumentation: ", ",
            documentation: "documentation",
            beforeDeployment: " and ",
            deployment: "deployment",
            end: "."
        },
        points: [
            "I stand out for my positive attitude, adaptability and willingness to keep learning.",
            "My goal is to join a development team, contribute to real projects and keep growing professionally."
        ]
    },

    experience: {
        title: "Work experience",
        items: [
            {
                role: "Web Application Developer",
                company: "NTT DATA Américo Vespucio",
                date: "Apr. 2025 - May 2026",
                icon: "bi bi-code-slash",
                description:
                    "Training internship in web application development, participating in backend tasks, REST APIs and technical issue resolution.",
                tasks: [
                    "Development and maintenance of REST APIs with Spring Boot.",
                    "Documentation and endpoint testing with OpenAPI/Swagger and Postman.",
                    "Use of Git/GitHub, databases and CRUD operations in development environments."
                ]
            },
            {
                role: "IT Systems Technician",
                company: "IT Department of Gines Town Council",
                date: "Mar. 2024 - Jun. 2024",
                icon: "bi bi-pc-display-horizontal",
                description:
                    "Training internship in IT systems, focused on technical support and equipment maintenance.",
                tasks: [
                    "Remote and on-site hardware and software issue resolution.",
                    "Installation, update and maintenance of computer equipment.",
                    "User support and assistance with technical environment tasks."
                ]
            }
        ]
    },

    technologies: {
        title: "Technologies and tools"
    },

    projects: {
        title: "Projects",
        codeButton: "Code",
        previewButton: "Preview"
    },

    contact: {
        title: "Let's have a chat",
        name: "Your name",
        email: "your@email.com",
        message: "Write your message...",
        submitButton: "Send message"
    },

    footer: {
        text: "David González Córdoba"
    },

    language: {
        es: "ES",
        en: "EN"
    }
} as const;
