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
  menu: {
    open: "scale-in-ver-top",
    close: "scale-out-ver-top",
  },
};

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
const dropDownGroupBtn = document.getElementById("dropDownGroupBtn");
let showmenuGroup = true;
dropDownGroupBtn.addEventListener("click", () => {
  const dropDownGroup = document.getElementById("dropDownGroup");

  if (showmenuGroup) {
    showQuitAnimation(dropDownGroup, showmenuGroup, animations.menu.open);
    showmenuGroup = false;
  } else {
    showQuitAnimation(dropDownGroup, false, animations.menu.close);
    showmenuGroup = true;
  }

  //  dropDownGroup.classList.toggle("hidden");
});

const toolbtn1 = document.getElementById("toolbtn1");
let showTool1 = true;
toolbtn1.addEventListener("click", () => {
  const dropDowntool1 = document.getElementById("dropDowntool1");
  if (showTool1) {
    showQuitAnimation(dropDowntool1, showTool1, animations.menu.open);
    showTool1 = false;
  } else {
    showQuitAnimation(dropDowntool1, false, animations.menu.close);
    showTool1 = true;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  sliderMenu();
});
