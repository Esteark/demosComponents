import { notify, renderPagination } from "./paintFunctions.js";
import { getData } from "./services.js";

let tramites = [];
async function obtainData() {
  tramites = await getData();
  renderPagination(tramites);
  counters();
}

(function () {
  obtainData();

  // Acciones para el filtrado
  findTramite();
})();

//Funcion para el buscador de de texto
function findTramite() {
  //Input text
  const inputSearchTramite = document.getElementById("txtFilterTramites");
  inputSearchTramite.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length != 0) {
        clearfilter();
        const arrayFilter = tramites.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        renderPagination(arrayFilter);
      } else {
        notify("No debes dejar este campo vacío");
      }
    }
  });

  //Buton input
  const btnSearchTramite = document.getElementById("btnSearchTramite");
  btnSearchTramite.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputSearchTramite.value.length != 0) {
      clearfilter();
      const arrayFilter = tramites.filter((item) =>
        item.title
          .toLowerCase()
          .includes(inputSearchTramite.value.toLowerCase())
      );
      renderPagination(arrayFilter);
    } else {
      notify("No debes dejar el campo de búsqueda vacío");
    }
  });

  //filters
  const itemFilter = document.querySelectorAll(".itemFilter");

  itemFilter.forEach((item) => {
    item.addEventListener("click", () => {
      const clickFiltro = item.dataset.filter;
      if (clickFiltro) {
        const number = Number(clickFiltro);
        console.log(number);
        clearfilter();
        switch (number) {
          case 0:
            const filter0 = tramites.filter(
              (item) =>
                item.item.management === "Trámite" ||
                item.management === "Servicio"
            );
            renderPagination(filter0);
            break;
          case 1:
            const filter1 = tramites.filter(
              (item) => item.item.management === "Trámite"
            );
            renderPagination(filter1);
            break;
          case 2:
            const filter2 = tramites.filter(
              (item) => item.management === "Servicio"
            );
            renderPagination(filter2);
            break;
          case 3:
            const filter3 = tramites.filter((item) => item.type === 0);
            renderPagination(filter3);
            break;
          case 4:
            const filter4 = tramites.filter((item) => item.type === 1);
            renderPagination(filter4);
            break;
          case 5:
            const filter5 = tramites.filter((item) => item.type === 2);
            renderPagination(filter5);
            break;
          case 6:
            const filter6 = tramites.filter((item) => item.cost === true);
            renderPagination(filter6);
            break;
          case 7:
            const filter7 = tramites.filter((item) => item.cost === false);
            renderPagination(filter7);
            break;
        }
      }
    });
  });
}

// funcion para filtrar tramite

//Funcion para limpiar los filtros

function clearfilter() {
  const btnclearFilters = document.getElementById("btnclearFilters");
  const clickButon = (e) => {
    e.preventDefault();
    obtainData();
    btnclearFilters.removeEventListener("click", clickButon);
    btnclearFilters.classList.remove("opacity-1");
    btnclearFilters.classList.add("opacity-0");
    setTimeout(() => {
      btnclearFilters.classList.add("hidden");
    }, 1000);
  };
  btnclearFilters.classList.remove("hidden");
  setTimeout(() => {
    btnclearFilters.classList.remove("opacity-0");
    btnclearFilters.classList.add("opacity-1");
  }, 100);
  btnclearFilters.addEventListener("click", (e) => {
    clickButon(e);
  });
}

//Funcion para el conteo de tramites y servicios
function counters() {
  const countTra = document.getElementById("countTra");
  const countSer = document.getElementById("countSer");
  let cantTramite = 0;
  let cantServicio = 0;
  tramites.forEach((item) => {
    if (item.management === "Trámite") {
      cantTramite++;
    } else if (item.manage) {
      cantServicio++;
    }
  });
  countTra.innerText = cantTramite;
  countSer.innerText = cantServicio;
}
