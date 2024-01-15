'use strict'

function handler(event) {
    alert( "Te quedas aquí" );
    // Con esta linea evitamos que nos redirija al enlace
    event.preventDefault();
    }