// Obtenemos el elemento con id 'y' y le asignamos el año actual
document.getElementById('y').textContent = new Date().getFullYear();

// Modo claro / oscuro
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const savedTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'bi bi-moon';
    } else {
        themeIcon.className = 'bi bi-sun';
    }
}

// Cargar proyectos desde JSON
const projectsContainer = document.getElementById('projectsContainer');

fetch('data/projects.json')
    .then(response => response.json())
    .then(projects => {
        projectsContainer.innerHTML = '';

        projects.forEach(project => {
            projectsContainer.innerHTML += createProjectCard(project);
        });
    })
    .catch(error => {
        console.error('Error al cargar los proyectos:', error);

        projectsContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning" role="alert">
                    No se han podido cargar los proyectos.
                </div>
            </div>
        `;
    });

function createProjectCard(project) {
    const imageContent = project.image
        ? `
            <img src="${project.image}" class="card-img-top project-img" alt="${project.imageAlt}">
        `
        : `
            <div class="project-img-wrapper">
                <span></span>
            </div>
        `;

    const stackItems = project.stack.map(technology => {
        return `
            <span>
                <img src="${technology.icon}" alt="">
                ${technology.name}
            </span>
        `;
    }).join('');

    const previewButton = project.preview
        ? `
            <a href="${project.preview}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
                <i class="bi bi-box-arrow-up-right me-1"></i>
                Preview
            </a>
        `
        : '';

    return `
        <div class="col-lg-4 col-md-6">
            <article class="card h-100 shadow-sm project-card">
                <div class="project-img-wrapper">
                    ${imageContent}
                </div>

                <div class="card-body d-flex flex-column">
                    <h3 class="h5">${project.name}</h3>

                    <p class="text-secondary">
                        ${project.description}
                    </p>

                    <div class="project-stack mb-3">
                        ${stackItems}
                    </div>

                    <div class="mt-auto d-flex flex-wrap gap-2">
                        <a href="${project.repository}" class="btn btn-outline-primary btn-sm" target="_blank" rel="noopener">
                            <i class="bi bi-github me-1"></i>
                            Code
                        </a>

                        ${previewButton}
                    </div>
                </div>
            </article>
        </div>
    `;
}
