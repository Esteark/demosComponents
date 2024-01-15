document.addEventListener("DOMContentLoaded", function () {
  //Configuración de colores generales
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          mainColor: "#17599b",
          govColor: "#3366cc",
        },
      },
    },
  };

  const navbar = document.getElementById("nav");

  let scrollPosition = 0;

  window.addEventListener("scroll", function () {
    let currentPosition = window.scrollY;

    if (currentPosition > 50) {
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

  navbar.style.animation = "fadeIn 1s ease-out";

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
      navbar.classList.add("bg-white");
      ulMenu.classList.remove("hidden");
      setTimeout(() => {
        ulMenu.classList.add(animations.menu.showMenu);
        ulMenu.classList.remove(animations.menu.hiddenMenu);
      }, 50);

      showmenu = true;
    } else {
      closeMenu();
    }
  });

  function closeMenu() {
    ulMenu.classList.remove(animations.menu.showMenu);
    ulMenu.classList.add(animations.menu.hiddenMenu);

    setTimeout(() => {
      ulMenu.classList.add("hidden");
    }, 500);

    showmenu = false;
  }

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

  let activated = false;

  //Funcionalidad de estadisticas
  const stadistics = document.querySelectorAll(".text-count span");
  const containerCounters = document.getElementById("containerCounters");
  window.addEventListener("scroll", () => {
    if (
      window.scrollY >
        containerCounters.offsetTop - containerCounters.offsetHeight - 200 &&
      activated === false
    ) {
      stadistics.forEach((counter) => {
        counter.innerText = 0;
        let count = 0;
        function updateCount() {
          const target = parseInt(counter.dataset.count);
          if (count < target) {
            count++;
            counter.innerText = count;
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        }
        updateCount();

        activated = true;
      });
    }
    // else if (
    //   window.scrollY <
    //     containerCounters.offsetTop - containerCounters.offsetHeight - 500 ||
    //   (window.scrollY == 0 && activated === true)
    // ) {
    //   stadistics.forEach((counter) => {
    //     counter.innerText = 0;
    //   });
    //   activated = false;
    // }
  });
});
