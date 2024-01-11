document.addEventListener("DOMContentLoaded", function () {
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

  navbar.style.animation = "slideInDown 1s ease-out";

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

  //Acciones menu tramites
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const btnTramite = document.getElementById("btnTramite");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    tramiteTitle.textContent = "Haz clic";
    tramiteParrafo.textContent =
      "Para conocer una descripción sobre el trámite";

    if (btnTramite.classList.contains("p-10")) {
      btnTramite.classList.remove("p-10");
      btnTramite.classList.add("p-6");
    } else {
      btnTramite.classList.add("p-10");
      btnTramite.classList.remove("p-6");
      console.log("Entre");
    }
  });
  //funcionalidad tramites
  const btnsTramites = document.querySelectorAll(".btntramite");
  const tramiteTitle = document.getElementById("tramite-title");
  const tramiteParrafo = document.getElementById("tramite-parrafo");
  btnsTramites.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      const tramite = icon.getAttribute("data-tramite");

      switch (tramite) {
        case "tramite-1":
          tramiteTitle.textContent = "Gestión de eventos";
          tramiteParrafo.textContent =
            "Transforma tu visión en realidad con nuestro proceso de planificación fácil. Desde la reserva hasta la ejecución, simplificamos cada detalle. ¡Haz que tu evento sea inolvidable con nuestro trámite rápido y eficiente!";
          break;
        case "tramite-2":
          tramiteTitle.textContent = "Hacienda";
          tramiteParrafo.textContent =
            "Gestiona tus obligaciones fiscales de manera fácil y segura. Completa los formularios online, presenta tus documentos y cumple con tus responsabilidades tributarias sin complicaciones. Simplificamos tus trámites hacienda para que puedas concentrarte en lo que más importa";
          break;
        case "tramite-3":
          tramiteTitle.textContent = "Seguros";
          tramiteParrafo.textContent =
            "Transforma tu visión en realidad con nuestro proceso de planificación fácil. Desde la reserva hasta la ejecución, simplificamos cada detalle. ¡Haz que tu evento sea inolvidable con nuestro trámite rápido y eficiente!";
          break;
        case "tramite-4":
          tramiteTitle.textContent = "Comunicación";
          tramiteParrafo.textContent =
            "Simplifica tus interacciones con nuestro proceso ágil. Completa el formulario en minutos y conecta instantáneamente. Agilizamos la comunicación para que te enfoques en lo que realmente importa. ¡Conecta y comunica sin complicaciones!";
          break;
        case "tramite-5":
          tramiteTitle.textContent = "Documentación";
          tramiteParrafo.textContent =
            "Simplifica tus trámites documentales con nosotros. Desde certificados hasta solicitudes, nuestro proceso te guiará paso a paso. Evita complicaciones y ahorra tiempo con nuestra plataforma eficiente. Completa tus documentos con facilidad y rapidez.";
          break;
        case "tramite-6":
          tramiteTitle.textContent = "Legales";
          tramiteParrafo.textContent =
            "Navega el laberinto legal con facilidad. Asesoramiento experto, formularios optimizados y proceso transparente. Resuelve tus trámites legales de manera eficiente y sin complicaciones. Cumple con la ley de manera segura y confiable.";
          break;
        case "tramite-7":
          tramiteTitle.textContent = "Soporte";
          tramiteParrafo.textContent =
            "Nuestro equipo está listo para ayudarte. Completa el formulario, describe tu problema y recibe asistencia personalizada en tiempo récord. Resolvemos tus inquietudes con eficiencia para que puedas seguir adelante. ¡Confía en nuestro soporte, estamos aquí para ayudarte";
          break;
        case "tramite-8":
          tramiteTitle.textContent = "Servidor";
          tramiteParrafo.textContent =
            "Optimiza la gestión de tu servidor con nuestro proceso ágil. Desde configuraciones hasta actualizaciones, nuestros trámites simplificados te permiten maximizar el rendimiento sin complicaciones. Simplifica la administración de tu servidor con nosotros y garantiza un funcionamiento óptimo.";
          break;
      }
    });
  });

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
