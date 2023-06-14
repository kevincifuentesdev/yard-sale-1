const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

navEmail.addEventListener('click', () => {toggleDisplay(desktopMenu)});
menu.addEventListener('click', () => {toggleDisplay(mobileMenu)});

function toggleDisplay(element) {
    element.classList.toggle('inactive');
}
