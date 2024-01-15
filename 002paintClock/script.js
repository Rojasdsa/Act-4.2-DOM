'use strict';

// Actualiza el reloj cada segundo
function update() {
  let clock = document.getElementById('reloj');
  let date = new Date(); // (*)
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

let timerId;

// Ejecuta el reloj
function clockStart() { 
  // solo establece un nuevo intervalo si el reloj no está corriendo
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }
  update();
}

// Para el reloj
function clockStop() {
  clearInterval(timerId);
  timerId = null;
}