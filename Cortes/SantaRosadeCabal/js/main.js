// INCIO carrusel Tramites
const swiperTramites = () => {
  const swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 20000, // Intervalo de tiempo entre diapositivas en milisegundos (en este caso, 5 segundos)
      disableOnInteraction: false, // Evita que se detenga el autoplay cuando el usuario interactúa con el slider
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
// Fin carrusel del Tramites

const btnAnuncios = document.getElementById("btnAnuncios");

btnAnuncios.addEventListener("click", () => {
  Swal.fire({
    title: "Información importante",
    text: "Lorem ipsum",
    icon: "warning",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  swiperTramites();
});
