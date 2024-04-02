function toggleMenu() {
    const menu = document.querySelector(".mobile-links");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        let extraOffset = window.innerWidth < 1200 ? 0 : 300; // Dodatkowy offset tylko dla szerokości ekranu powyżej 1200px
        return (
            rect.top <= ((window.innerHeight - 300)  || (document.documentElement.clientHeight - 300))
        );
    }

    function toggleVisibility() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
});
