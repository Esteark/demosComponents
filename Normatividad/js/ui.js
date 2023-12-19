import { notify, paintMainDocs, printSliders } from "./paintFuntions.js";
import { getData } from "./services.js";
import { datePicker } from "./tools.js";

let documentos = [];

//Funcion principal que llamará a todas las acciones en el front
export function funcionUI() {
  printSliders();
  actionDocuments();
}

// Funcion para las acciones en los documentos
export const actionDocuments = async () => {
  const response = await getData();
  const { docs } = response;
  documentos = docs;
  //Función para el pintado de los documentos
  paintMainDocs(documentos);
  // Funcion para el slider filtrador
  sliderFilters(docs);
  // Funcion para el slider filtrador

  // función para el (buscador)
  actionInputText();
  // función para el (buscador)

  //Función para el menu de filtros
  menuFilters();

  //Función para limpiar datos cuando se filtre por fecha
  clearFilterDate(docs);
};
// Funcion para las acciones en los documentos

// Funcion para el buscador
function actionInputText() {
  const txtNormatividad = document.getElementById("txtNormatividad");
  txtNormatividad.addEventListener("input", (e) => {
    const arrayFilter = documentos.filter((item) =>
      item.Title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    paintMainDocs(arrayFilter);
  });
}
// Funcion para el buscador

// Slider filtros
function sliderFilters(docs) {
  //Agrego listener en los eventos click de los botones del slider para : 1. estilos y 2. Filtrar
  const btnFilters = document.querySelectorAll(".btnFilters");
  btnFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-filter");
      const label = btn.getAttribute("data-label");
      documentos = docs.filter((item) => item.Category === label);

      if (documentos.length != 0) {
        paintMainDocs(documentos);
      } else {
        documentos = docs;
        paintMainDocs(documentos);
      }

      clickButton(id);
    });
  });
  //Cambio el color del primer botón
  clickButton(0);
  // funcion para mostrar cual es el botón que esta seleccionado
  function clickButton(id) {
    btnFilters.forEach((btn) => {
      const valorData = btn.getAttribute("data-filter");
      if (valorData != id) {
        btn.classList.remove("bg-[#1d42ff]");
        btn.classList.add("bg-[#e6effd]");
        btn.classList.remove("text-white");
        btn.classList.add("text-[#1c4884]");
      } else {
        btn.classList.remove("bg-[#e6effd]");
        btn.classList.add("bg-[#1d42ff]");
        btn.classList.add("text-white");
        btn.classList.remove("text-[#1c4884]");
      }
    });
  }
}
// Slider filtros

//funcion para el menu mobile
function menuFilters() {
  //Funcion para ocultar o mostrar la seccion de filtros en mobile
  const btnMenuFilters = document.getElementById("btnMenuFilters");
  btnMenuFilters.addEventListener("click", () => {
    showQuitMenuFiltersMobile();
  });
  //Funcion para ocultar o mostrar la seccion de filtros en mobile

  // función para mostrar o ocultar el menu dateTimePicker
  const btnFilterDate = document.getElementById("btnFilterDate");

  btnFilterDate.addEventListener("click", () => {
    showQuitDateFilter();
  });
  //función para hacer funcionar los dateTimePikers
  datePicker();
}
//Funcion para resetear accion de filtrar por fecha

//Función para ocultar o mostrar sección menu filter date
function showQuitDateFilter() {
  const secInputsDate = document.getElementById("secInputsDate");
  if (secInputsDate.classList.contains("max-h-[0px]")) {
    secInputsDate.classList.remove("max-h-[0px]");
    secInputsDate.classList.add("max-h-[300px]");
  } else {
    secInputsDate.classList.remove("max-h-[300px]");
    secInputsDate.classList.add("max-h-[0px]");
  }
}

//Función para ocultar o motrar el menu  de los filtros en versión moible
function showQuitMenuFiltersMobile() {
  const secFilters = document.getElementById("secFilters");
  if (secFilters.classList.contains("max-h-[0px]")) {
    secFilters.classList.remove("max-h-[0px]");
    secFilters.classList.add("max-h-[500px]");
  } else {
    secFilters.classList.remove("max-h-[500px]");
    secFilters.classList.add("max-h-[0px]");
  }
}

let showfilter = false;
function clearFilterDate(docs) {
  const listSelect = document.getElementById("dates");
  const dateStart = document.getElementById("dateStart");
  const dateEnd = document.getElementById("dateEnd");
  const btnRemoveFilter = document.getElementById("btnRemoveFilter");
  const btnFilterDate = document.getElementById("btnFilterFecha");
  //Evento para el botón de borrar filtro
  btnRemoveFilter.addEventListener("click", () => {
    documentos = docs;
    paintMainDocs(documentos);
    listSelect.value = "";
    dateStart.value = "";
    dateEnd.value = "";
    notify("Filtro borrado", "#1d42ff", "#1d42ff");
    showQuitDateFilter();
  });

  btnFilterFecha.addEventListener("click", () => {
    if (
      listSelect.value.length == 0 ||
      dateStart.value.length == 0 ||
      dateEnd.value.length == 0
    ) {
      notify("No debes dejar campos vacíos para poder realizar la busqueda");
    } else {
      const typeDate = Number(listSelect.value);
      const fechaDesdeStr = dateStart.value;
      const fechaHastaStr = dateEnd.value;
      const [dayDesde, monthDesde, yearDesde] = fechaDesdeStr.split("/");
      const [dayHasta, monthHasta, yearHasta] = fechaHastaStr.split("/");
      const dateDesde = new Date(`${monthDesde}/${dayDesde}/${yearDesde}`);
      const dateHasta = new Date(`${monthHasta}/${dayHasta}/${yearHasta}`);

      if (typeDate) {
        documentos = docs.filter((item) => {
          const fechaExpedicion = new Date(item.Exp);
          return fechaExpedicion >= dateDesde && fechaExpedicion <= dateHasta;
        });
        paintMainDocs(documentos);
      } else {
        documentos = docs.filter((item) => {
          const fechaPublicacion = new Date(item.Created);

          return fechaPublicacion >= dateDesde && fechaPublicacion <= dateHasta;
        });
        paintMainDocs(documentos);
      }
      showfilter = true;

      showQuitDateFilter();
    }
  });
}
