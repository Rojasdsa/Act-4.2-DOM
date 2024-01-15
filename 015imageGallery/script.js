'use strict'

thumbs.onclick = function(event) {
    let thumbnail = event.target.closest('a');

    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
  }

  // Sustituye los atributos por los de la <img> clickada
  function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
  }