/* ---------------- Smooth Scroll ---------------- */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ---------------- Starfield with Twinkle ---------------- */
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
      speed: Math.random() * 0.3 + 0.05,
      twinkle: Math.random() * 0.05 + 0.02, // twinkle speed
      opacity: Math.random()
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  starsArray.forEach(star => {
    // Draw star with current opacity
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
    ctx.fill();

    // Move star down
    star.y += star.speed;
    if (star.y > starsCanvas.height) star.y = 0;

    // Twinkle effect
    star.opacity += star.twinkle;
    if (star.opacity > 1 || star.opacity < 0) star.twinkle *= -1;
  });
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', initStars);

// Initialize
initStars();
animateStars();

/* ---------------- Star Parallax ---------------- */
window.addEventListener('scroll', () => {
  // move the stars slightly slower than scroll
  const scrollY = window.scrollY;
  starsCanvas.style.transform = `translateY(${scrollY * 0.3}px)`;
});




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
