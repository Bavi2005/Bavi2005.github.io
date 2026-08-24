const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let drops = [];
const chars = "アイウエオカキクケコサシスセソ01<>{}[]$#@&*+=/\\|";

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const cols = Math.floor(canvas.width / 16);
  drops = Array(cols).fill(0).map(() => Math.random() * canvas.height / 16);
}

function drawMatrix() {
  ctx.fillStyle = "rgba(13, 17, 23, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff6c";
  ctx.font = "14px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * 16, drops[i] * 16);
    if (drops[i] * 16 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

if (!reducedMotion) {
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  setInterval(drawMatrix, 66);
}

const phrases = [
  "Developer // Cybersecurity Enthusiast // Tech Explorer",
  "Coding in the Neon Matrix",
  "Systems Programming in C @ 42 KL",
  "Building Tech That Never Sleeps...",
  "Fortifying the Future with Security"
];

const typedEl = document.getElementById("typed");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const phrase = phrases[phraseIndex];
  typedEl.textContent = phrase.slice(0, charIndex);

  let delay = deleting ? 28 : 62;

  if (!deleting && charIndex === phrase.length) {
    delay = 1800;
    deleting = true;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  } else {
    charIndex += deleting ? -1 : 1;
  }
  setTimeout(typeLoop, delay);
}

typeLoop();

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const sections = document.querySelectorAll("section[id], header[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 200) {
      current = section.getAttribute("id");
    }
  });
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

async function loadStats() {
  try {
    const res = await fetch("https://api.github.com/users/Bavi2005");
    if (!res.ok) return;
    const data = await res.json();
    animateCount(document.getElementById("stat-repos"), data.public_repos);
    animateCount(document.getElementById("stat-followers"), data.followers);
  } catch (err) {
    document.getElementById("stat-repos").textContent = "18+";
    document.getElementById("stat-followers").textContent = "8+";
  }
}

function animateCount(el, target) {
  if (!el || target == null) return;
  const duration = 900;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

loadStats();

document.getElementById("year").textContent = new Date().getFullYear();
