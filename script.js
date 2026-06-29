const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const year = document.querySelector('#year');
const signupForm = document.querySelector('#signupForm');
const formNote = document.querySelector('#formNote');

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

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Thank you. This demo form works visually, but it needs an email service to save subscribers.';
  signupForm.reset();
});
