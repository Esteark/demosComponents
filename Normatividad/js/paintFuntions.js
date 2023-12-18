import { getData } from "./services.js";
import {
  colorLabel,
  dateFormater,
  iconDocument,
  obtaintLastDocuments,
  shortText,
} from "./tools.js";

let documentos = [];

//Slider Filters
const sliderFilter = () => {
  const mySwiperFilter = new Swiper(".mySwiperFilter", {
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
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 6,
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

    // autoplay: {
    //   delay: 10000,
    //   disableOnInteraction: false,
    // },
  });
};
//Slider Filters

//Slider last documents
const sliderDocuments = () => {
  const mySwiperDocuments = new Swiper(".mySwiperDocuments", {
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      668: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1500: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    //centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Deshabilita la paginación clickeable
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  });
};
//Slider last documents

//Pintado de Slider Filtros
export const printSliderFilters = async () => {
  const response = await getData();
  const buttons = response.filters;
  const swiperContainer = document.querySelector(".sliderBtn");
  swiperContainer.innerHTML = "";
  swiperContainer.innerHTML = `<button
  class="text-white hover:bg-[#306eea] hover:text-white transition py-3 duration-300 rounded-full swiper-slide h-auto px-1 text-[12px] xl:text-[14px]  btnFilters" data-filter="0" data-label=""
>
 Todas las categorías
</button>`;
  buttons.forEach((item, index) => {
    swiperContainer.innerHTML += `<button
      class="text-white hover:bg-[#306eea] hover:text-white transition py-3 duration-300 rounded-full swiper-slide h-auto px-1 text-[12px] xl:text-[14px]  btnFilters" data-filter="${
        index + 1
      }" data-label="${item.name}"
    >
     ${item.name} <span></span>
    </button>`;
  });

  //Agrego funcionalidad Swiper
  sliderFilter();
};
//Pintado de Slider Filtros

// Pintado Slider ultimos documentos
export const printSliderDocuments = async () => {
  const response = await getData();
  const { docs } = response;
  const lastDocuments = obtaintLastDocuments(docs);
  const swiperSection = document.querySelector(".sliderDocuments");
  swiperSection.innerHTML = "";
  lastDocuments.forEach((docu) => {
    swiperSection.innerHTML += `<a class="bg-white rounded-md flex justify-between  items-center p-6 h-auto swiper-slide border border-[#e7e7e7] hoverCards lastFileCard " href="https://www.e-verify.gov/sites/default/files/everify/guides/InstructionsCreatePDFofE-VerifyManual.pdf" target="_blank" download>
      <figcaption class="flex flex-col gap-2">
        <h3 class="text-[16px] font-bold">${
          docu.Title.length >= 20 ? shortText(docu.Title, 15) : docu.Title
        }</h3>
        <p class="text-[10px] md:text-[12px]" title="${docu.Description}">
          ${
            docu.Description.length >= 60
              ? shortText(docu.Description, 50)
              : docu.Description
          }
        </p>
        <span
          class="${
            docu.Category.length >= 20 ? "w-40" : "w-24"
          } rounded-full p-1 text-[10px] text-center
           ${colorLabel(docu.Category)} rounded-full p-1 text-[10px] font-bold"
          >${docu.Category}</span
        >
      </figcaption>
      <img src="${iconDocument(
        docu.FileLeafRef
      )}" alt="" class="w-16 xl:w-20 " />
    </a>`;
  });

  sliderDocuments();
};
// Pintado Slider ultimos documentos

// Funcion para las acciones en los documentos
export const actionDocuments = async () => {
  const response = await getData();
  const { docs } = response;
  documentos = docs;
  paintMainDocs(documentos);

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
  // función para el (buscador)
  actionInputText();
  // función para el (buscador)

  //Función para el menu de filtros
  menuFilters();
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

//funcion para el menu mobile
function menuFilters() {
  //Funcion para el btn en menu mobile

  const btnMenuFilters = document.getElementById("btnMenuFilters");
  let showMenu = false;
  btnMenuFilters.addEventListener("click", () => {
    const secFilters = document.getElementById("secFilters");
    if (!showMenu) {
      secFilters.classList.remove("max-h-[0px]");
      secFilters.classList.add("max-h-[500px]");
      showMenu = true;
    } else {
      secFilters.classList.remove("max-h-[500px]");
      secFilters.classList.add("max-h-[0px]");
      showMenu = false;
    }
  });

  // función para el dateTimePicker
  const btnFilterDate = document.getElementById("btnFilterDate");
  let showdateSec = false;
  btnFilterDate.addEventListener("click", () => {
    const secInputsDate = document.getElementById("secInputsDate");
    if (!showdateSec) {
      secInputsDate.classList.remove("max-h-[0px]");
      secInputsDate.classList.add("max-h-[300px]");
      showdateSec = true;
    } else {
      secInputsDate.classList.remove("max-h-[300px]");
      secInputsDate.classList.add("max-h-[0px]");
      showdateSec = false;
    }
  });
}

// Funcion para pintar los documentos
function paintMainDocs(docs) {
  if (docs.length != 0) {
    const secDocs = document.getElementById("secDocs");
    secDocs.innerHTML = "";
    docs.forEach((doc) => {
      secDocs.innerHTML += `<!-- file -->
      <section class="grid grid-cols-12 gap-3 py-3 border-b cardDocument">
        <article
          class="col-span-12 sm:col-span-3 md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center"
        >
          <img src="${iconDocument(
            doc.FileLeafRef
          )}" class="w-16 md:w-20" alt="" />
          <p class="text-[12px] font-bold">${doc.FileSize}</p>
        </article>
        <article
          class="col-span-12 sm:col-span-9 md:col-span-10 lg:col-span-7 flex flex-col justify-center items-center sm:items-start "
        >
          <span
            class="${doc.Category.length >= 20 ? "w-40" : "w-24"}  ${colorLabel(
        doc.Category
      )}  rounded-full text-[10px] text-center rounded-full p-1 text-[10px] font-bold mb-2 lg:hidden"
            >${doc.Category}</span
          >
          <a href="#" class="font-bold hover:underline">
            ${doc.Title}</a
          >
          <p class="text-[12px] text-justify lg:text-left line-clamp-2 md:line-clamp-3 lg:line-clamp-3 overflow-hidden">
          ${doc.Description}
          </p>
          <div
            class="w-full flex flex-wrap justify-center sm:justify-start gap-10  sm:gap-5 mb:gap-1 lg:hidden text-[12px] my-3 md:my-2"
          >
            <div class="flex flex-col md:flex-row gap-1">
              <p>Fecha publicación:</p>
              <p class="font-bold">${dateFormater(doc.Created)}</p>
            </div>
            <span class="hidden md:block">|</span>
            <div class="flex flex-col md:flex-row gap-1">
              <p>Fecha Expedición</p>
              <p class="font-bold">${dateFormater(doc.Exp)}</p>
            </div>
          </div>
        </article>
        <article
          class="hidden md:col-span-2 lg:col-span-2 2xl:col-span-1 lg:flex flex-col justify-center"
        >
          <p class="font-bold text-[14px]">Publicación</p>
          <p class="text-[14px]">${dateFormater(doc.Created)}</p>
        </article>
        <article
          class="hidden md:col-span-2 lg:col-span-2 2xl:col-span-1 lg:flex flex-col justify-center"
        >
          <p class="font-bold text-[14px]">Expedición</p>
          <p class="text-[14px]">${dateFormater(doc.Exp)}</p>
        </article>
        <article
          class="hidden col-span-2 xl:col-span-2 2xl:flex justify-center items-start flex-col"
        >
          <p class="font-bold mb-1 text-[14px] ">Categoria</p>
          <span
            class=" ${
              doc.Category.length >= 20 ? "w-40" : "w-24"
            }  ${colorLabel(
        doc.Category
      )} rounded-full text-[10px] text-center rounded-full text-[10px] font-bold h-[20px] flex items-center justify-center"
            >${doc.Category}</span
          >
        </article>
      </section>
      <!-- file  -->`;
    });
  } else {
    const secDocs = document.getElementById("secDocs");
    secDocs.innerHTML = "";
    secDocs.innerHTML = `<section class="flex flex-col justify-center items-center gap-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
  <span class="text-2xl font-bold">No encontramos resultados con el filtro aplicado</span>
   </section>`;
  }
}
// Funcion para pintar los documentos

// let datosConsulta = await consumirDatosFuncionarios();
// let currentPage = 1;
// let itemsPerPage = 6;
// const numPagina = document.querySelector('.contenedor__numPagina');

// export async function showCurrentPage(resp) {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const data = resp.d.results;
//     const dataToRender = data.slice(startIndex, endIndex);

//     const cardContainer = document.querySelector(".contenedor__funcionarios");
//     cardContainer.innerHTML = ''; // Limpiar el contenido actual

//     pintarCardsFuncionarios(dataToRender);
// }

// const prevButton = document.getElementById("atras");
// const nextButton = document.getElementById("siguiente");

// prevButton.addEventListener("click", async (e) => {
//     e.preventDefault();
//     if (currentPage > 1) {
//         currentPage--;

//         numPagina.innerText = currentPage;

//         showCurrentPage(datosConsulta);
//     } else {
//         console.log("Ya no puedes retroceder más.");
//     }
// });

// nextButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     let data = datosConsulta.d.results;
//     const totalPages = Math.ceil(data.length / itemsPerPage);

//     if (currentPage < totalPages) {
//         currentPage++;

//         numPagina.innerText = currentPage;

//         // Ocultar elementos anteriores
//         const previousItems = document.querySelectorAll(".card");
//         previousItems.forEach(item => {
//             item.classList.add("hide");
//         });

//         showCurrentPage(datosConsulta);
//     } else {
//         console.log("Ya estás en la última página.");
//     }
// });
