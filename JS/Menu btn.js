// Menu btn functionality
const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  menuButton.classList.add('diasablePointer');
  navigation.classList.toggle('bg-dark');
  navigation.classList.toggle('mobile-menu-bg');
  navigation.classList.toggle('position-fixed');
  document.querySelector('body').classList.toggle('position-fixed');
  document.querySelector('.logo-img').classList.toggle('d-none');
  document.querySelector('.nav-bar .logo').classList.toggle('d-none');
  menuButton.innerHTML = '<img src="/Images/close_mobile_menu.png" alt="menu">';
  if (!navigation.classList.contains('bg-dark')) {
    menuButton.innerHTML = '<img src="/Images/mobile_menu.png" alt="menu">';
  }
  setTimeout(() => {
    menuButton.classList.remove('diasablePointer');
  }, 500);
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

// See more | See less
const seeMore = document.querySelectorAll('.see-more');
const seeLess = document.querySelectorAll('.see-less');
const hiddenSpeakers = document.querySelectorAll('.speakers .d-none');

function toggleHide(index, Nodelist) {
  seeMore[index].classList.toggle('d-none');
  for (let i = 0; i < Nodelist.length; i += 1) {
    Nodelist[i].classList.toggle('d-none');
  }
}

seeMore[0].addEventListener('click', () => {
  toggleHide(0, hiddenSpeakers);
});

seeLess[0].addEventListener('click', () => {
  toggleHide(0, hiddenSpeakers);
});
