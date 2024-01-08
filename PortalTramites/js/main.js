document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("nav");
  const header = document.getElementById("header");
  let scrollPosition = 0;

  window.addEventListener("scroll", function () {
    let currentPosition = window.scrollY;

    if (currentPosition > 50) {
      // El usuario está haciendo scroll hacia abajo
      navbar.classList.add("fixed", "bg-white", "top-0");
      header.classList.add("lg:mt-20");
    } else {
      // El usuario está haciendo scroll hacia arriba
      navbar.classList.remove("fixed", "bg-white", "top-0");
      header.classList.remove("lg:mt-20");
    }

    scrollPosition = currentPosition;
  });

  //Acciones para el header

  navbar.style.animation = "slideInDown 0.5s ease-out";

  // Aplicar animación de izquierda a derecha
  const secText = document.getElementById("secText");
  secText.style.animation = "fadeIn 1s ease-out";

  // Aplicar animación de aparición gradual de la imagen
  const headerImage = document.getElementById("headerImage");
  headerImage.style.animation = "fadeIn 1s ease-out";

  // Añadir la clase de expansión de la barra de carga después de un retraso
  const loadingBar = document.getElementById("loadingBar");
  loadingBar.style.animation = "expandWidth 3s ease-out";
  setTimeout(function () {
    loadingBar.classList.add("w-full");
  }, 500); // Puedes ajustar el tiempo de retraso según sea necesario

  //Acciones botón menu mobile
  const btnMenu = document.getElementById("btnMenu");
  const ulMenu = document.getElementById("ulMenu");

  const animations = {
    menu: {
      showMenu: "opacity-100",
      hiddenMenu: "opacity-0",
    },
  };

  let showmenu = false;
  btnMenu.addEventListener("click", () => {
    if (!showmenu) {
      ulMenu.classList.remove("hidden");
      setTimeout(() => {
        ulMenu.classList.add(animations.menu.showMenu);
        ulMenu.classList.remove(animations.menu.hiddenMenu);
      }, 50);

      showmenu = true;
    } else {
      ulMenu.classList.remove(animations.menu.showMenu);
      ulMenu.classList.add(animations.menu.hiddenMenu);

      setTimeout(() => {
        ulMenu.classList.add("hidden");
      }, 500);

      showmenu = false;
    }
  });

  // funcionalidad caruseles
  const swiperInfo = () => {
    const swiper = new Swiper(".mySwiperInfo", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
    });
  };

  swiperInfo();
});
