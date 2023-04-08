const menu = document.querySelector('[data-menu]');
const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');

const toggleMenu = () => {
  menu.classList.toggle('is-hidden');
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
