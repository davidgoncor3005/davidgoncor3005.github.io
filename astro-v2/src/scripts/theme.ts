const root = document.documentElement;
const button = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");

if (button) {
    const updateButton = () => {
        const isDark = root.dataset.theme === "dark";
        const icon = button.querySelector<HTMLElement>("[data-theme-icon]");

        if (icon) icon.className = isDark ? "bi bi-moon" : "bi bi-sun";

        const label = isDark ? button.dataset.actionLight : button.dataset.actionDark;
        if (label) button.setAttribute("aria-label", label);
        button.setAttribute("aria-pressed", String(isDark));
    };

    button.addEventListener("click", () => {
        root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";

        try {
            localStorage.setItem("theme", root.dataset.theme);
        } catch {}

        updateButton();
    });

    updateButton();
}

export {};
