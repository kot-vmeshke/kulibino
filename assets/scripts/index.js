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

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      620: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1220: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
})