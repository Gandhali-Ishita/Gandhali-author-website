const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const year = document.querySelector('#year');
const signupForm = document.querySelector('#signupForm');
const formNote = document.querySelector('#formNote');
const revealItems = document.querySelectorAll('.reveal');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen.toString());
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Thank you. This signup is visual for now. Connect an email service later to save subscribers.';
  signupForm.reset();
});
