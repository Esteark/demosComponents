document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("nav");
  const header = document.getElementById("header");
  let scrollPosition = 0;

  window.addEventListener("scroll", function () {
    let currentPosition = window.scrollY;

    if (currentPosition > 400) {
      // El usuario está haciendo scroll hacia abajo
      navbar.classList.add(
        "fixed",
        "bg-white",
        "top-0",
        "shadow-md",
        "shadow-white"
      );
      navbar.classList.remove("mb-10");
      // header.classList.add("lg:mt-32");
      // header.classList.remove("mt-10");
    } else {
      // El usuario está haciendo scroll hacia arriba
      navbar.classList.remove(
        "fixed",
        "bg-white",
        "top-0",
        "shadow-md",
        "shadow-white"
      );
      navbar.classList.add("mb-10");
      // header.classList.remove("lg:mt-32");
      // header.classList.add("mt-10");
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

  // Botón del scroll
  let scrollBtn = document.getElementById("scrollBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight * 0.2) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.transform = "translateX(0)";
    } else {
      scrollBtn.style.transform = "translateX(100%)";
      scrollBtn.style.opacity = "0";
    }
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Botón del scroll

  //Acciones menu tramites
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
