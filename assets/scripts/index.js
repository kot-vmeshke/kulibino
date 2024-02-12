console.log('Hello, Kulibino!');

const handleMenu = () => {
  const burgerButton = document.querySelector('#burger');
  const menu = document.querySelector('.header__nav-list');

  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('js-opened');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  handleMenu();

  const swiperHero = new Swiper('.hero__swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperPortfolio = new Swiper('.portfolio__container', {
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
});
