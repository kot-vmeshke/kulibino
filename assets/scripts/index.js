console.log('Hello, Kulibino!');

const handleMenu = () => {
  const burgerButton = document.querySelector('#burger');
  const menu = document.querySelector('.header__nav-list');

  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('js-opened');
  });
};

const choiceType = () => {
  const slidesrButton = document.querySelector('label[for="slide"]');
  const slidersPanel = document.querySelector('.sliders');
  const types = document.querySelectorAll('[name="type"]');

  if (document.documentElement.clientWidth >= 1000) {
    slidesrButton.addEventListener('mouseenter', () => {
      slidersPanel.style.display = 'flex';
    });
  }

  slidesrButton.addEventListener('click', (e) => {
    e.stopPropagation();
    slidersPanel.style.display = 'flex';
    slidersPanel.dataset.open = 'open';
  });

  slidersPanel.addEventListener('click', (e) => {
    e.stopPropagation();
    let selectedType;
    types.forEach((item) => {
      if (item.checked) {
        selectedType = item.dataset.type;
      }
    });
    slidesrButton.childNodes[0].textContent = selectedType;
    slidersPanel.style.display = 'none';
  });

};

document.addEventListener('DOMContentLoaded', () => {
  handleMenu();
  choiceType();

  const swiperHero = new Swiper('.hero__swiper', {
    autoplay: {
      delay: 5000,
    },
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
