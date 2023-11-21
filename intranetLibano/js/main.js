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
    }, 500);
  }
};

//Funciones navbar
//evento click boton de GROUPLIST

const dropDownGroupBtn = document.getElementById("dropDownGroupBtn");
const dropDownGroup = document.getElementById("dropDownGroup");
let showmenuGroup = true;
actionbtn(dropDownGroupBtn, dropDownGroup, showmenuGroup);
//evento click boton de GROUPLIST

// evento del primer boton de ajuste
const toolbtn1 = document.getElementById("toolbtn1");
const dropDowntool1 = document.getElementById("dropDowntool1");
let showTool1 = true;
actionbtn(toolbtn1, dropDowntool1, showTool1);

// evento del boton de mensajes
const btnMensaje = document.getElementById("btnMensaje");
const dropDownMessage = document.getElementById("dropDownMessage");
let showMensaje = true;
actionbtn(btnMensaje, dropDownMessage, showMensaje);
// evento del primer boton de ajuste

//evento boton info user
const btnInfoUser = document.getElementById("btnInfoUser");
const dropDownInfoUser = document.getElementById("dropDownInfoUser");
let showInfoUser = true;
actionbtn(btnInfoUser, dropDownInfoUser, showInfoUser);
//evento boton info user

// evento boton tool 2
const toolbtn2 = document.getElementById("toolbtn2");
const dropDowntool2 = document.getElementById("dropDowntool2");
let showTool2 = true;
actionbtn(toolbtn2, dropDowntool2, showTool2);
// evento boton tool 2

// Funcion agregadora de listeners
function actionbtn(btn, submenu, op) {
  btn.addEventListener("click", () => {
    if (op) {
      showQuitAnimation(submenu, op, animations.subMenu.open);
      op = false;
      //closeSubmenu(submenu);
      slideMobileMenu(submenu, true);
    } else {
      showQuitAnimation(submenu, false, animations.subMenu.close);
      slideMobileMenu(submenu, false);
      op = true;
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

//funcion para ocultar submenus simultaneos
function closeSubmenu(element) {
  submenus.forEach((item) => {
    if (item !== element) {
      item.classList.add("hidden");
    }
  });
}

//acciones para abrir o cerrar el menu
const navMenu = document.getElementById("navMenu");
const btnOpenMenu = document.getElementById("btnOpenMenu");
btnOpenMenu.addEventListener("click", () => {
  showQuitAnimation(navMenu, true, animations.menu.open);
});
const btnCloseMenu = document.getElementById("btnCloseMenu");
btnCloseMenu.addEventListener("click", () => {
  showQuitAnimation(navMenu, false, animations.menu.close);
});

function OpenCloseMenu() {
  showQuitAnimation(navMenu, false, animations.menu.close);
}

function slideMobileMenu(element, op) {
  if (op) {
    const heightsub = navMenu.children[2].offsetHeight;

    if (element === dropDownGroup || dropDowntool1) {
      const heightSlide = element.offsetHeight;
      navMenu.children[2].style.transform = `translateY(${heightSlide}px)`;
    }
  } else {
    if (element === dropDownGroup || dropDowntool1) {
      navMenu.children[2].style.transform = `translateY(0px)`;
    }
  }
}

console.log(navMenu.children[2]);

document.addEventListener("DOMContentLoaded", () => {
  sliderMenu();
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 992) {
      OpenCloseMenu();
    }
  });
});
