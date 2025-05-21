document.addEventListener("DOMContentLoaded", () => {
    const headerLinks = document.querySelectorAll(".hyperlien");

    headerLinks.forEach((link) => {
        link.addEventListener("click", () => {
            // Supprime la classe active de tous les liens
            headerLinks.forEach((l) => l.classList.remove("active"));

            // Ajoute la classe active au lien cliqué
            link.classList.add("active");
        });
    });
});