'use strict'

let menu = document.getElementById('criptos');
let headerMenu = menu.querySelector('.header');

headerMenu.onclick = function() {
  menu.classList.toggle('open');
};