const hamb = document.querySelector(".hamb");
const popupDisabled = document.querySelector(".popup")
const bodyNoScroll = document.querySelector("body");

hamb.addEventListener('click', hambHandler);
function hambHandler () {
    hamb.classList.toggle('active');
    popupDisabled.classList.toggle('disabled')
    bodyNoScroll.classList.toggle('noscroll')
}


const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1201: {
        slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
}
});