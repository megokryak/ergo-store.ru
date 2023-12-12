const mWidth = 360;
const tWidth = 1200;
const dWidth = 1920;

var header = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');
var submenuMobile = document.querySelectorAll('.main-nav__item1');
var submenuTable = document.querySelector('.main-nav__submenu-list2');

function openSubMenu(e) {
  e.classList.add('main-nav__wrapper-submenu--active');
  navToggle.classList.add('header__toggle--back');  
};

function openSubMenuTable () {
  if (submenuTable.classList.contains('main-nav__submenu-list2--active')) {
    submenuTable.classList.remove('main-nav__submenu-list2--active');
  } else {
    submenuTable.classList.add('main-nav__submenu-list2--active');
  }
};

//открытие мобильного меню
if(document.documentElement.clientWidth < dWidth) {
  navToggle.addEventListener('click', function() {
    var toogleBack = document.querySelector('.header__toggle--back');
    if (toogleBack !== null) {
      toogleBack.classList.remove('header__toggle--back');
      document.querySelector('.main-nav__wrapper-submenu--active').classList.remove('main-nav__wrapper-submenu--active');
    }
    else {
      if (header.classList.contains('header--closed')) {
        header.classList.remove('header--closed');
      } else {
        header.classList.add('header--closed');
      }
    }
  });
}


//Кликл по елементу меню для появления подменю
if(document.documentElement.clientWidth < tWidth) {
  submenuMobile.forEach((e)=> {
    e.addEventListener('click', function() {
      var submenuElement = this.querySelector('.main-nav__wrapper-submenu');
      if(submenuElement !== null) {
        openSubMenu(submenuElement);
      }
    });
  });
}

//Открыие подменю на планшете
if(document.documentElement.clientWidth < dWidth && document.documentElement.clientWidth >= tWidth) {
  submenuMobile.forEach((e)=> {
    e.addEventListener('click', function() {
      if(this.querySelector('.main-nav__submenu-list') !== null) {
        openSubMenuTable();
      }
    });
  });
}
