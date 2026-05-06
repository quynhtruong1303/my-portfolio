// Typed text animation
const roles = ['Software Engineer', 'Full Stack Developer', 'Data Engineer', 'Undergraduate Researcher'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const el = document.getElementById('typed-role');
  if (!el) return;

  const current = roles[roleIndex];

  if (isDeleting) {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeRole, delay);
}

document.addEventListener('DOMContentLoaded', typeRole);

// Scroll-fade animation
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
  });
});

function openResume() {
  document.getElementById('resume-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeResume() {
  document.getElementById('resume-modal').classList.remove('active');
  document.body.style.overflow = '';
}

function closeResumeOnBackdrop(e) {
  if (e.target === document.getElementById('resume-modal')) closeResume();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeResume(); });
