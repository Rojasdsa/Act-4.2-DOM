'use strict'

function showNotification({ top = 0, right = 0, className, html }) {

    let notification = document.createElement('div');

    // Nombre de la clase
    notification.className = "notification";
    if (className) {
        notification.classList.add(className);
    }

    // Estilo de la calse
    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    // Mensaje HTML al final del body
    notification.innerHTML = html;
    document.body.append(notification);

    // Borra el hello mostrado tras 1,5 segundos
    setTimeout(() => notification.remove(), 1500);
}

// Mostrará un hello cada 2 segundos
let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);
