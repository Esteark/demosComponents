//Inicio Carrusel
const sliderMenu = () => {
  const mySwiperMenu = new Swiper(".mySwiperMenu", {
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      340: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    centeredSlides: true,
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

const animations = {
  subMenu: {
    open: "scale-in-ver-top",
    close: "scale-out-ver-top",
  },
  menu: {
    open: "scale-in-hor-right",
    close: "scale-out-hor-right",
  },
};
// funcion para agregar o quitar animaciones
const showQuitAnimation = (element, op, animation) => {
  if (op) {
    element.classList.remove("hidden");
    element.classList.add(`${animation}`);

    element.addEventListener("animationend", () => {
      element.classList.remove(`${animation}`);
    });
  } else {
    element.classList.add(`${animation}`);

    setTimeout(() => {
      element.classList.remove(`${animation}`);
      element.classList.add("hidden");
    }, 200);
  }
};

//Funciones navbar
//evento click boton de GROUPLIST
const dropDownGroupBtn = document.getElementById("dropDownGroupBtn");
const dropDownGroup = document.getElementById("dropDownGroup");
actionbtn(dropDownGroupBtn, dropDownGroup);
//evento click boton de GROUPLIST

// evento del primer boton de ajuste
const toolbtn1 = document.getElementById("toolbtn1");
const dropDowntool1 = document.getElementById("dropDowntool1");
actionbtn(toolbtn1, dropDowntool1);

// evento del boton de mensajes
const btnMensaje = document.getElementById("btnMensaje");
const dropDownMessage = document.getElementById("dropDownMessage");
actionbtn(btnMensaje, dropDownMessage);
// evento del primer boton de ajuste

//evento boton info user
// const btnInfoUser = document.getElementById("btnInfoUser");
// const dropDownInfoUser = document.getElementById("dropDownInfoUser");
// actionbtn(btnInfoUser, dropDownInfoUser);
//evento boton info user

// evento boton tool 2
// const toolbtn2 = document.getElementById("toolbtn2");
// const dropDowntool2 = document.getElementById("dropDowntool2");
// actionbtn(toolbtn2, dropDowntool2);
// evento boton tool 2

// Funcion agregadora de listeners
function actionbtn(btn, submenu) {
  btn.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
      toggleDropdown(submenu);
    } else {
      if (submenu.classList.contains("hidden")) {
        showQuitAnimation(submenu, true, animations.subMenu.open);
        if (window.innerWidth >= 1024) {
          closeSubmenu(submenu);
        }
      } else {
        showQuitAnimation(submenu, false, animations.subMenu.close);
      }
      removeToogle();
    }
  });
}
// Funcion agregadora de listeners

//Array con los submenus que me servira para ocultarlos
const submenus = [
  dropDownGroup,
  dropDowntool1,
  dropDownMessage,
  // dropDownInfoUser,
  // dropDowntool2,
];
//Array con los submenus que me servira para ocultarlos

//funcion para ocultar submenus simultaneos
function closeSubmenu(element = "") {
  if (element) {
    submenus.forEach((item) => {
      if (item !== element) {
        showQuitAnimation(item, false, animations.subMenu.close);
      }
    });
  } else {
    submenus.forEach((item) => {
      showQuitAnimation(item, false, animations.subMenu.close);
    });
  }
}
//funcion para ocultar submenus simultaneos

//acciones para abrir o cerrar el menu en versión mobile
const navMenu = document.getElementById("navMenu");
const btnOpenMenu = document.getElementById("btnOpenMenu");
const body = document.getElementById("body");
btnOpenMenu.addEventListener("click", () => {
  if (window.innerWidth <= 1024) {
    showQuitAnimation(navMenu, true, animations.menu.open);
  }
  body.style.overflowY = "hidden";
});
const btnCloseMenu = document.getElementById("btnCloseMenu");
btnCloseMenu.addEventListener("click", () => {
  if (window.innerWidth <= 1024) {
    showQuitAnimation(navMenu, false, animations.menu.close);
  }
  body.style.overflowY = "auto";
});
//acciones para abrir o cerrar el menu en versión mobile

function OpenCloseMenu() {
  showQuitAnimation(navMenu, false, animations.menu.close);
  body.style.overflowY = "auto";
}

function toggleDropdown(element) {
  let height = 0;
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    height = element.scrollHeight;
    element.style.height = `${height}px`;
  } else {
    element.style.height = `${0}px`;
    setTimeout(() => {
      element.classList.add("hidden");
    }, 80);
  }
}
//Funcion para remover el estilo delos submenus puestos en la version mobile
function removeToogle() {
  submenus.forEach((item) => {
    item.removeAttribute("style");
  });
}
//Funcion para remover el estilo delos submenus puestos en la version mobile

//Acciones para mostrar mas cards

const secAnuncios = document.getElementById("secAnuncios");
const secAgoras = document.getElementById("secAgoras");
const btnAllEvents = document.getElementById("btnAllEvents");
const btnAllAgoras = document.getElementById("btnAllAgoras");
let showauncios = false;
let showAgoras = false;

//Funcion para pintado de más cards
const paintCards = (cards, element, op) => {
  if (op) {
    [...Array(cards)].forEach((_) => {
      element.innerHTML += `<!-- cards de anuncios  -->
                  <figure class="border-2 border-[#f1f1f1] cardAnuncios cardTransition ">
                    <section class="border-l-2 border-[#00a79d]">
                      <!-- sec 1 card  -->
                      <section class="flex flex-col gap-6 p-3 h-full">
                        <section
                          class="flex flex-col xl:flex-row xl:gap-5 border-b-1"
                        >
                          <div class="w-full xl:w-[70%]">
                            <h4 class="text-[#00a79d] font-bold">Empleo</h4>
                            <p class="text-[12px] text-justify">
                              Empleo para empresas públicas de limpieza los
                              jóvenes queremos trabajar y nuestra ciudad cada vez
                              más sucia y cada vez más los privados
                            </p>
                          </div>
                          <div class="flex gap-3 xl:flex-col w-full xl:w-[30%]">
                            <p class="text-[12px] w-full">
                              <span class="text-4xl">. </span>Juan Carlos Romero
                              Osuna
                            </p>
  
                            <p class="text-[12px] w-full">
                              <span class="text-4xl">. </span>28/01/2023
                            </p>
                          </div>
                        </section>
                        <details class="flex flex-col gap-1 pb-2">
                        <summary class="cursor-pointer list-none mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4 grow btnDetailEvent"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          <!-- Puedes agregar texto u otro contenido aquí si lo deseas -->
                        </summary>
                        <p class="text-[10px] text-justify 2xl:pr-10">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perspiciatis voluptatem, aperiam neque
                          praesentium, accusamus, alias a dolorum quaerat
                          obcaecati molestias recusandae accusantium hic
                          veritatis deleniti porro molestiae totam delectus
                          placeat.
                        </p>
                      </details>
                      </section>
                      <!-- sec 1 card  -->
                      <!-- sec 2 card  -->
                      <section
                        class="pl-3 py-3 border-t-2 border-[#f1f1f1] bg-[#fcfcfc]"
                      >
                        <h3 class="text-[12px]">Finaliza en 23 horas</h3>
                      </section>
                      <!-- sec 2 card  -->
                    </section>
                  </figure>
                  <!-- cards de anuncios  -->`;
    });
  } else {
    [...Array(cards)].forEach((_) => {
      element.innerHTML += `<!-- cards de agoras  -->
      <figure class="border-2 border-[#f1f1f1] cardAgoras cardTransition">
        <section class="border-l-2 border-[#ff713f]">
          <!-- sec 1 card  -->
          <section class="flex flex-col gap-6 p-3">
            <section
              class="flex flex-col xl:flex-row xl:gap-6 border-b-1"
            >
              <div class="w-full xl:w-[70%]">
                <h4 class="text-[#00adf3] font-bold">Stop ley ppp</h4>
                <p class="text-[12px] text-justify">
                  Por una ley absurda que señala a razas que realmente
                  no son peligrosas.
                </p>
              </div>
              <div class="flex gap-3 xl:flex-col w-full xl:w-[30%]">
                <p class="text-[12px] w-full">
                  <span class="text-4xl">. </span>Juan Carlos Romero
                  Osuna
                </p>

                <p class="text-[12px] w-full">
                  <span class="text-4xl">. </span>28/01/2023
                </p>
              </div>
            </section>
            <details class="flex flex-col gap-2 pb-2">
              <summary class="cursor-pointer list-none mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 grow"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <!-- Puedes agregar texto u otro contenido aquí si lo deseas -->
              </summary>
              <p class="text-[10px] text-justify 2xl:pr-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Perspiciatis voluptatem, aperiam neque
                praesentium, accusamus, alias a dolorum quaerat
                obcaecati molestias recusandae accusantium hic
                veritatis deleniti porro molestiae totam delectus
                placeat.
              </p>
            </details>
          </section>
          <!-- sec 1 card  -->
          <!-- sec 2 card  -->
          <section
            class="pl-3 py-3 border-t-2 border-[#f1f1f1] bg-[#fcfcfc]"
          >
            <h3 class="text-[12px]">Finaliza en 23 horas</h3>
          </section>
          <!-- sec 2 card  -->
        </section>
      </figure>
      <!-- cards de agoras  -->`;
    });
  }
};
//Funcion para pintado de más cards

//Accion boton para mostrar mas eventos
btnAllEvents.addEventListener("click", () => {
  btnAllEvents.innerText = "Ocultar anuncios";
  secAnuncios.innerHTML = "";
  secAnuncios.classList.add("h-[200px]");
  secAnuncios.classList.remove("justify-center");
  if (showauncios) {
    paintCards(1, secAnuncios, true);
    btnAllEvents.innerText = "Ver todos los anuncios";
    secAnuncios.classList.remove("h-200px]");
    secAnuncios.classList.add("justify-center");
    showauncios = false;
  } else {
    paintCards(10, secAnuncios, true);
    showauncios = true;
  }
  console.log("click");
});
paintCards(1, secAnuncios, true);
//Accion boton para mostrar mas eventos

//Accion boton para mostrar mas agoras
btnAllAgoras.addEventListener("click", () => {
  btnAllAgoras.innerText = "Ocultar Agoras";
  secAgoras.innerHTML = "";
  secAgoras.classList.add("h-[200px]");
  secAgoras.classList.remove("justify-center");
  if (showAgoras) {
    paintCards(1, secAgoras, false);
    btnAllAgoras.innerText = "Todas las Agoras";
    secAgoras.classList.remove("h-[200px]");
    secAgoras.classList.add("justify-center");
    showAgoras = false;
  } else {
    paintCards(10, secAgoras, false);
    showAgoras = true;
  }
});
paintCards(1, secAgoras, false);
//Accion boton para mostrar mas agoras

//Acciones para mostrar mas cards
document.addEventListener("DOMContentLoaded", () => {
  sliderMenu();
  window.addEventListener("resize", () => {
    closeSubmenu();
    if (window.innerWidth <= 992) {
      OpenCloseMenu();
    } else {
      navMenu.classList.remove(animations.menu.close);
      body.style.overflowY = "auto";
    }
  });
});
