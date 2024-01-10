document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("nav");

  let scrollPosition = 0;

  window.addEventListener("scroll", function () {
    let currentPosition = window.scrollY;

    if (currentPosition > 200) {
      // El usuario está haciendo scroll hacia abajo
      navbar.classList.add(
        "fixed",
        "bg-white",
        "top-0",
        "shadow-md",
        "shadow-white"
      );
      navbar.classList.remove("mb-10");
    } else {
      // El usuario está haciendo scroll hacia arriba
      navbar.classList.remove("bg-white", "top-0", "shadow-md", "shadow-white");
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
