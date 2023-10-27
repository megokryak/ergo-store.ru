var header = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');
var submenuMobile = document.querySelectorAll('.main-nav__item1');

function openSubMenu(e) {
  e.classList.add('main-nav__wrapper-submenu--active');
  navToggle.classList.add('header__toggle--back')
};

navToggle.addEventListener('click', function() {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
  } else {
    header.classList.add('header--closed');
  }
});

submenuMobile.forEach((e)=> {
  e.addEventListener('click', function() {
    openSubMenu(this.querySelector('.main-nav__wrapper-submenu'));
  });
});
