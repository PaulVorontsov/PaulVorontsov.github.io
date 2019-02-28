var menu = document.getElementById('menu');
var button = menu.querySelector('.navigation__button-drop');

button.onclick = function () {
    menu.classList.toggle('open');
};