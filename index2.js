function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const sections = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.2;

        if (pos < screen) {
            sec.classList.add('show');
        }
    });
});