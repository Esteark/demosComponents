document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("nav");
  const header = document.getElementById("header");
  let scrollPosition = 0;

  window.addEventListener("scroll", function () {
    let currentPosition = window.scrollY;

    if (currentPosition > 100) {
      // El usuario está haciendo scroll hacia abajo
      navbar.classList.add(
        "fixed",
        "bg-white",
        "top-0",
        "shadow-md",
        "shadow-white"
      );
      header.classList.add("lg:mt-32");
      header.classList.remove("mt-10");
    } else {
      // El usuario está haciendo scroll hacia arriba
      navbar.classList.remove(
        "fixed",
        "bg-white",
        "top-0",
        "shadow-md",
        "shadow-white"
      );
      header.classList.remove("lg:mt-32");
      header.classList.add("mt-10");
    }

    scrollPosition = currentPosition;
  });

  //Acciones para el header

  navbar.style.animation = "slideInDown 0.5s ease-out";

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
    if (window.scrollY > window.innerHeight * 2) {
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
});
