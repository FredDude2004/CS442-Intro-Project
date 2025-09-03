document.addEventListener("DOMContentLoaded", () => {
    const pageContent = document.getElementById("page-content");
    const navLinks = document.querySelectorAll(".nav-link, .logo");

    // Load a page into #page-content
    async function loadPage(page) {
        try {
            const response = await fetch(`pages/${page}.html`);
            if (!response.ok) throw new Error("Page not found");
            const html = await response.text();
            pageContent.innerHTML = html;

            // Update active link
            navLinks.forEach((link) =>
                link.classList.toggle("active", link.dataset.page === page)
            );
        } catch (err) {
            pageContent.innerHTML = `<p>Sorry, the page "${page}" could not be loaded.</p>`;
        }
    }

    // Handle hash changes
    function handleNavigation() {
        const page = location.hash.replace("#", "") || "home";
        loadPage(page);
    }

    // Intercept clicks on nav links (optional, for smoother navigation)
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            location.hash = page; // triggers handleNavigation()
        });
    });

    // Listen for back/forward navigation
    window.addEventListener("hashchange", handleNavigation);

    // Load initial page
    handleNavigation();
});

