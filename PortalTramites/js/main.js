document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("nav");
  const header = document.getElementById("header");
  let scrollPosition = 0;

  window.addEventListener("scroll", function () {
    let currentPosition = window.scrollY;

    if (currentPosition > scrollPosition) {
      // El usuario está haciendo scroll hacia abajo
      navbar.classList.add("fixed", "bg-white", "top-0");
      header.classList.add("mt-10");
    } else {
      // El usuario está haciendo scroll hacia arriba
      navbar.classList.remove("fixed", "bg-white", "top-0");
      header.classList.remove("mt-10");
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

  // Acciones para el texto del header
  const typed = new Typed("#textHeader", {
    strings: [
      'Construir <span class="text-[#17599b]">equipos de alto rendimiento</span> es difícil pero lo hacemos fácil',
    ],
    showCursor: false,
    typeSpeed: 20,
    backSpeed: 0,
    startDelay: 100,
    fadeOut: false,
    loop: false,
  });

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
      ulMenu.classList.add(animations.menu.showMenu);
      ulMenu.classList.remove(animations.menu.hiddenMenu);

      showmenu = true;
    } else {
      ulMenu.classList.remove(animations.menu.showMenu);
      ulMenu.classList.add(animations.menu.hiddenMenu);

      showmenu = false;
    }
  });
});
