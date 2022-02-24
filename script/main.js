// navigation menu toggler
let menu = document.querySelector('.right');
let nav = document.querySelector('.open-menu');
let close = document.querySelector('.close');
let link = document.querySelector('.nav-link');


menu.onclick = () => {
     nav.classList.toggle('active');
};
close.onclick = () => {
     nav.classList.remove('active');
};
nav.onclick = () => {
     nav.classList.remove('active');
};