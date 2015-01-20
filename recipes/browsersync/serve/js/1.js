var el = document.querySelector('p');
var newEl = document.createElement('p');
newEl.innerHTML = '1';

document.body.insertBefore(newEl, el);
