'use strict'

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
 
        /* Para evitar teclas "pegadas", reseteamos el estado pressed
        si el usuario quiere usa el atajo de nuevo, permitámoslo */
        pressed.clear();

        func();
    });

    document.addEventListener('keyup', function (event) {
        pressed.delete(event.code);
    });

}

// Teclas definidas
runOnKeys(
    () => alert("Tú has provocado este alert"),
    "KeyQ",
    "KeyW"
);