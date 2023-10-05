// Скролл вверх
document.getElementById('scrollToTopLink').addEventListener('click', function(event) {
  event.preventDefault();
  scrollToTop();
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Открытие и закрытие меню
const menu = document.querySelector('.menu');
const menus = document.querySelectorAll('.menu');
const burger = document.querySelector('.header__button');

function openMenu(menu) {
  menu.classList.add('menu_opened');
}

function closeMenu(menu) {
  menu.classList.remove('menu_opened');
}

menus.forEach(function (menu) {
  menu.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('menu_opened') || evt.target.classList.contains('menu__close')) {
      closeMenu(menu);
    }
  })
})

burger.addEventListener('click', function () { openMenu(menu) });