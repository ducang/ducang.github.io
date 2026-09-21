(() => {
    "use strict";

    const root = document.documentElement;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let preference = null;
    try {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") preference = saved;
    } catch {
        // Theme switching still works if the browser blocks local storage.
    }

    function applyTheme(theme) {
        root.dataset.theme = theme;
        const button = document.getElementById("theme-toggle");
        if (!button) return;
        const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
        button.textContent = theme === "dark" ? "☀" : "☾";
        button.setAttribute("aria-label", label);
        button.title = label;
    }

    // Apply before the stylesheet loads to avoid a flash of the wrong theme.
    applyTheme(preference || (systemTheme.matches ? "dark" : "light"));

    document.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById("theme-toggle");
        if (!button) return;
        applyTheme(root.dataset.theme);
        button.hidden = false;
        button.addEventListener("click", () => {
            preference = root.dataset.theme === "dark" ? "light" : "dark";
            applyTheme(preference);
            try { localStorage.setItem("theme", preference); } catch { /* Session-only preference. */ }
        });
    });

    systemTheme.addEventListener("change", (event) => {
        if (!preference) applyTheme(event.matches ? "dark" : "light");
    });
})();
