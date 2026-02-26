// Nav shadow on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// Active section highlighting
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

function highlightNav() {
    const scrollY = window.scrollY + 100;

    let currentId = "";
    sections.forEach((section) => {
        if (scrollY >= section.offsetTop) {
            currentId = section.getAttribute("id");
        }
    });

    navAnchors.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + currentId);
    });
}

window.addEventListener("scroll", highlightNav);
highlightNav();
