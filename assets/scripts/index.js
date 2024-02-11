console.log('Hello, Kulibino!');

const handleMenu = () => {
  const burgerButton = document.querySelector('#burger');
  const menu = document.querySelector('.header__nav-list');

  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('js-opened');
  })
}

document.addEventListener('DOMContentLoaded', () => {
  handleMenu();
})