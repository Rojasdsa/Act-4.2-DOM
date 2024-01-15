'use strict'

let conts = document.querySelectorAll('.cont');

for (let cont of conts) {

    // Añadimos el botón sin funcionalidad
    cont.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    
    // Button debe convertirse en el primer child de cont
    cont.firstChild.onclick = () => cont.remove();
}
