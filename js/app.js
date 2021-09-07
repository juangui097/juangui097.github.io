// ----  Dropdown menu  ----
const navBar = document.querySelector('#main-nav');
const menuButton = document.querySelector('#menuToggle').querySelector('input');
const mobileMenu = document.querySelector('.mobile-menu');
var smScreenWidth = window.matchMedia('(max-width: 499px)');
var mdScreenWidth = window.matchMedia('(min-width: 500px)');
var down = false;

function menuToggle() {
  if (smScreenWidth.matches) {
    if (down) {
      mobileMenu.style.top = '-100%';
      navBar.style.boxShadow = "0 1px 5px 0 #474B4F";
      down = false;
    } else {
      mobileMenu.style.top = '50px';
      navBar.style.boxShadow = "0 0 0 0";
      down = true;
    }
  } else if (mdScreenWidth.matches) {
    if (down) {
      mobileMenu.style.top = '-100%';
      navBar.style.boxShadow = "0 2px 7px 0 #474B4F";
      down = false;
    } else {
      mobileMenu.style.top = '55px';
      navBar.style.boxShadow = "0 0 0 0";
      down = true;
    }
  }
}

// ----  Smooth Scroll  ----
var pageSections = document.querySelectorAll('a[href^="#"]');
pageSections.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});







// ----  OVERLAY IMAGE  ----
const image = document.querySelector('.profile-pic');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.modal-close');


// Open
image.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

// Close
modalClose.addEventListener('click', () => {
  overlay.classList.add('hidden');
});
