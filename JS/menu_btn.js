// Menu btn functionality
const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');
const hamburger = document.querySelector('#hamburger-menu');
const closeMenu = document.querySelector('#close-menu');
menuButton.addEventListener('click', () => {
  menuButton.classList.add('diasablePointer');
  setTimeout(() => { menuButton.classList.remove('diasablePointer'); }, 500);
  navigation.classList.toggle('bg-dark');
  navigation.classList.toggle('mobile-menu-bg');
  navigation.classList.toggle('position-fixed');
  hamburger.classList.toggle('d-none');
  closeMenu.classList.toggle('d-none');
  hamburger.classList.add('w3-animate-bottom');
  document.querySelector('body').classList.toggle('position-fixed');
  document.querySelector('.logo-img').classList.toggle('d-none');
  document.querySelector('.nav-bar .logo').classList.toggle('d-none');
});
