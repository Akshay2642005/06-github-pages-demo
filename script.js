document.addEventListener("DOMContentLoaded", () => {
    const heroButton = document.querySelector(".btn");
    const darkModeToggle = document.getElementById("darkModeToggle");

    heroButton.addEventListener("click", () => {
        alert("🚀 Thanks for exploring the site!");
    });

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
