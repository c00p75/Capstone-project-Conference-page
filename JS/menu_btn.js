// Menu btn functionality
const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');
const hamburger = document.querySelector('#hamburger-menu');
const closeMenu = document.querySelector('#close-menu');
menuButton.addEventListener('click', () => {
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

// Sponsors slide
const sponsors = document.querySelector('.sponsors');
const sponsors1 = document.querySelectorAll('.sponsor1');
const sponsors2 = document.querySelectorAll('.sponsor2');
const sponsors3 = document.querySelectorAll('.sponsor3');
let slideIndex = 0;
const sets = [sponsors1, sponsors2, sponsors3];

function hideSponsors(set) {
  for (let i = 0; i < set.length; i += 1) {
    set[i].classList.toggle('d-md-none');
  }
}

function slide() {
  if (slideIndex < 0) { slideIndex = 2; }
  if (slideIndex > 2) { slideIndex = 0; }
  hideSponsors(sets[slideIndex]);
}

sponsors.addEventListener('click', (e) => {
  if (e.target.classList.contains('prev')) {
    slide();
    slideIndex -= 1;
    slide();
  }
  if (e.target.classList.contains('next')) {
    slide();
    slideIndex += 1;
    slide();
  }
});
