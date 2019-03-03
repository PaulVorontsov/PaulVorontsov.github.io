var menuMobile = document.getElementById('mobile');
var btn = menuMobile.querySelector('.navigation__button-mobile-menu');

btn.onclick = function () {
    menuMobile.classList.toggle('drop');
};