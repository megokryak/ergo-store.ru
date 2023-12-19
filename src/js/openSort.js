var sort = document.querySelector('.form-filter__sort-value');
var sortElements = document.querySelector('.form-filter__sort-list');
var filters = document.querySelector('.form-filter__filters-value');
var filtersElements = document.querySelector('.form-filter__filters-list');
var priceTitle = document.querySelector('.form-filter__price-title');
var colorTitle = document.querySelector('.form-filter__color-title');
var materialTitle = document.querySelector('.form-filter__material-title');
var featuresTitle = document.querySelector('.form-filter__features-title');
var countryTitle = document.querySelector('.form-filter__country-title');
var hightTitle = document.querySelector('.form-filter__height-title');

var itemsColorCheck = document.querySelectorAll('.colors-list__item');

function addClassOpenMenu (e) {
  var classListOpenMenu = e.classList;
  var nameOpenClass = classListOpenMenu[0] + '--open';
  if (e.classList.contains(nameOpenClass)) {
    e.classList.remove(nameOpenClass);
  } else {
    e.classList.add(nameOpenClass);
  }
}

function hoverCheckBox () {
  console.log(this);
}


sort.addEventListener('click', function() {
  addClassOpenMenu(sort);
});

filters.addEventListener('click', function() {
  addClassOpenMenu(filters);
});


priceTitle.addEventListener('click', function() {
  addClassOpenMenu(priceTitle);
});

colorTitle.addEventListener('click', function() {
  addClassOpenMenu(colorTitle);
});

materialTitle.addEventListener('click', function() {
  addClassOpenMenu(materialTitle);
});

featuresTitle.addEventListener('click', function() {
  addClassOpenMenu(featuresTitle);
});

countryTitle.addEventListener('click', function() {
  addClassOpenMenu(countryTitle);
});

hightTitle.addEventListener('click', function() {
  addClassOpenMenu(hightTitle);
});


itemsColorCheck.forEach(e => {
  e.addEventListener('click', hoverCheckBox, true);
});