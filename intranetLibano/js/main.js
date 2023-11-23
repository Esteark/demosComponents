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
    // centeredSlides: true,
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
const btnInfoUser = document.getElementById("btnInfoUser");
const dropDownInfoUser = document.getElementById("dropDownInfoUser");
actionbtn(btnInfoUser, dropDownInfoUser);
//evento boton info user

// evento boton tool 2
const toolbtn2 = document.getElementById("toolbtn2");
const dropDowntool2 = document.getElementById("dropDowntool2");
actionbtn(toolbtn2, dropDowntool2);
// evento boton tool 2

// Funcion agregadora de listeners
function actionbtn(btn, submenu) {
  btn.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
      toggleDropdown(submenu);
    } else {
      if (submenu.classList.contains("hidden")) {
        showQuitAnimation(submenu, true, animations.subMenu.open);
        if (window.innerWidth > 1024) {
          closeSubmenu(submenu);
        }
      } else {
        showQuitAnimation(submenu, false, animations.subMenu.close);
      }
    }
  });
}
// Funcion agregadora de listeners

//Array con los submenus que me servira para ocultarlos
const submenus = [
  dropDownGroup,
  dropDowntool1,
  dropDownMessage,
  dropDownInfoUser,
  dropDowntool2,
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
  let subMenu = element;
  let height = 0;

  if (subMenu.classList.contains("hidden")) {
    subMenu.classList.remove("hidden");
    height = subMenu.scrollHeight;
    subMenu.style.height = `${height}px`;
  } else {
    subMenu.style.height = `${0}px`;
    setTimeout(() => {
      subMenu.classList.contains("hidden");
    }, 200);
  }
}

function removeToogle() {
  submenus.forEach((item) => {
    item.removeAttribute("style");
  });
}

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
