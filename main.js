const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-container');

navEmail.addEventListener('click', () => {
    toggleDisplay(desktopMenu);
});
menu.addEventListener('click', () => {
    toggleDisplay(mobileMenu);
});
cart.addEventListener('click', toggleShoppingCart);

const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

function toggleDisplay(element) {
    shoppingCart.classList.add('inactive');
    element.classList.toggle('inactive');
}

function toggleShoppingCart() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    shoppingCart.classList.toggle('inactive');
}
