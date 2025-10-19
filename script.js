/* ---------------- Smooth Scroll ---------------- */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ---------------- Starfield ---------------- */
const starsCanvas = document.createElement('canvas');
starsCanvas.id = 'stars';
document.body.appendChild(starsCanvas);
const ctx = starsCanvas.getContext('2d');

let starsArray = [];
const numStars = 150;

function initStars() {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;
  starsArray = [];
  for (let i = 0; i < numStars; i++) {
    starsArray.push({
      x: Math.random() * starsCanvas.width,
      y: Math.random() * starsCanvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.3 + 0.05
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  ctx.fillStyle = '#ffffff';
  starsArray.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    // Move star down
    star.y += star.speed;
    if (star.y > starsCanvas.height) star.y = 0;
  });
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', initStars);

// Initialize
initStars();
animateStars();

/* ---------------- Scroll Reveal ---------------- */
const sections = document.querySelectorAll('section');

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);


