const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('header');

navToggle.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});
