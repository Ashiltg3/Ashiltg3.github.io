// Smooth scroll for nav
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll reveal
const sections = document.querySelectorAll('section');
function reveal() {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
