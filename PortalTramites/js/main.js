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
