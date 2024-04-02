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
        return (
            rect.top >= 0 && // Odległość od górnej krawędzi, w której ma się uruchomić efekt
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 300 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
