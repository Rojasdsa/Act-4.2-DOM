'use strict'

// Funciona y muestra "1"
button.addEventListener("click", () => alert("1"));

/* No funciona. Para remover el handler necesitamos pasar exactamente 
la función que fue asignada. 
*/ 
button.removeEventListener("click", () => alert("1"));

// Funciona y muestra "2". Funciona independientemente.
button.onclick = () => alert(2);


/* 
Para que removeEventListener funciones habría que crear una función:

function handler() {
  alert(1);
}

button.addEventListener("click", handler);
button.removeEventListener("click", handler);
*/