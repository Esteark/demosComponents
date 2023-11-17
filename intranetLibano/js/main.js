//Inicio Carrusel
const sliderMenu = () => {
  const mySwiperMenu = new Swiper(".mySwiperMenu", {
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Deshabilita la paginación clickeable
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
};
//Fin Carrusel galeria

document.addEventListener("DOMContentLoaded", () => {
  sliderMenu();
});
