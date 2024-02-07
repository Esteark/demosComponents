import { getData } from "./services.js";

export const paintTramites = (array) => {
  const secTramites = document.getElementById("secTramites");
  secTramites.innerHTML = "";
  if (array.length != 0) {
    array.forEach((tramite) => {
      secTramites.innerHTML += `<section
    class="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 border-b border-mainColor px-6 py-8"
  >
    <div class="col-span-2 flex flex-col gap-3">
      <a
        href="./formsTramites/${tramite.url}"
        class="hover:underline text-mainColor transition-all font-semibold"
        >${tramite.title}</a
      >
      <p class="text-[14px]">
        ${tramite.description}
      </p>
    </div>
    <div class="flex flex-wrap lg:flex-col gap-3">
      <span class="flex gap-3 items-center">
       ${paintTypeTramite(tramite.type)}
      </span>
      <span class="flex gap-3 items-center">
       ${paintCosto(tramite.cost)}
      </span>
      <span class="flex gap-3 items-center">
        <i class="fa-solid fa-clock text-[1rem]"></i>
        <h3 class="text-[12px]">${
          tramite?.duration ? tramite.duration : "Sin especificación"
        }</h3>
      </span>
    </div>
  </section>`;
    });
  } else {
    secTramites.innerHTML = "";
  }
};

function paintCosto(costo) {
  if (costo) {
    return `<div class="rounded-full border w-5 h-5 flex items-center    justify-center border-black">
    <i class="fa-solid fa-dollar-sign text-[12px]"></i>
 </div>
<h3 class="text-[12px]">Trámite con costo</h3>`;
  }
  return `<div
    class="relative rounded-full border w-5 h-5 flex items-center justify-center border-black"
  >
    <i class="fa-solid fa-dollar-sign text-[12px]"></i>
    <div
      class="absolute w-full h-full transform -rotate-45 border-t border-black translate-y-[6px] translate-x-[5px]"
    ></div>
  </div>
  <h3 class="text-[12px]">Trámite sin costo</h3>
  `;
}

function paintTypeTramite(type) {
  switch (type) {
    case 0:
      return `<i class="fa-solid fa-laptop text-[1rem]"></i> <h3 class="text-mainColor text-[12px]"> Trámite en línea</h3> `;
    case 1:
      return `<i class="fa-solid fa-laptop text-[1rem]"></i> <h3 class="text-mainColor text-[12px]"> Trámite parcialmente en línea</h3> `;
    case 2:
      return `<i class="fa-solid fa-user text-[1rem]"></i> <h3 class="text-mainColor text-[12px]"> Trámite presencial </h3>`;
    default:
      return `<i class="fa-solid fa-ban text-[1rem]"></i> <h3 class="text-mainColor text-[12px]"> Sin especificación </h3>`;
  }
}

export const renderPagination = (array) => {
  let datosConsulta = array;
  let currentPage = 1;
  let itemsPerPage = 3;
  const numPagina = document.querySelector(".contenedor__numPagina");
  const prevButton = document.getElementById("atras");
  const nextButton = document.getElementById("siguiente");
  numPagina.innerText = currentPage;
  showCurrentPage(datosConsulta);

  function showCurrentPage(resp) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const data = resp;
    const dataToRender = data.slice(startIndex, endIndex);
    paintTramites(dataToRender);

    // Deshabilitar el botón de retroceso si no hay más páginas hacia atrás
    prevButton.disabled = currentPage === 1;
    prevButton.classList.toggle("cursor-not-allowed", prevButton.disabled);
    prevButton.classList.toggle("opacity-50", prevButton.disabled);

    // Deshabilitar el botón siguiente si no hay más páginas hacia adelante
    const totalPages = Math.ceil(data.length / itemsPerPage);
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
    nextButton.classList.toggle("cursor-not-allowed", nextButton.disabled);
    nextButton.classList.toggle("opacity-50", nextButton.disabled);
  }

  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      numPagina.innerText = currentPage;
      showCurrentPage(datosConsulta);
    }
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    let data = datosConsulta;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    if (currentPage < totalPages) {
      currentPage++;
      numPagina.innerText = currentPage;
      showCurrentPage(datosConsulta);
    }
  });
};
