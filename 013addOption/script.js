'use strict'

// Muestra la opción seleccionada con "selected"
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);

// Se añade una nueva option para elegir
let newOption = new Option("Classic", "classic");
genres.append(newOption);

// Selecciona la opción creada antes de desplegar el menú
newOption.selected = true;