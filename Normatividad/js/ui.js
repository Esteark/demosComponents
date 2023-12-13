import { getData } from "./services.js";
import { iconDocument, shortText } from "./tools.js";
import { colors } from "./varsColors.js";

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

// Acciones slider btn
export const printSliderFilters = async () => {
  const response = await getData();
  const buttons = response.filters;
  const swiperContainer = document.querySelector(".sliderBtn");
  swiperContainer.innerHTML = "";
  buttons.forEach((item) => {
    swiperContainer.innerHTML += `<button
    class="text-white hover:bg-[#306eea] hover:text-white transition py-3 duration-300 rounded-full swiper-slide h-auto px-1 text-[12px] xl:text-[14px] btnButton" data-filter="${item.id}"
  >
   ${item.name} <span></span>
  </button>`;
  });

  //Agrego listener en los eventos click de los botones
  const btnButton = document.querySelectorAll(".btnButton");
  btnButton.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-filter");
      clickButton(id);
    });
  });
  //Cambio el color del primer botón
  clickButton(0);
  //Agrego funcionalidad Swiper
  sliderFilter();

  function clickButton(id) {
    btnButton.forEach((btn) => {
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
};
// Acciones slider btn

//Slider las documents
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
//Slider las documents

//Acciones documents
export const printSliderDocuments = async () => {
  const response = await getData();
  const { docs } = response;
  const lastDocuments = obtaintLastDocuments(docs);
  const swiperSection = document.querySelector(".sliderDocuments");
  swiperSection.innerHTML = "";
  lastDocuments.forEach((docu) => {
    swiperSection.innerHTML += `<a class="bg-white rounded-md flex justify-between  items-center p-6 h-auto swiper-slide border border-[#e7e7e7] hoverCards lastFileCard" href="https://www.e-verify.gov/sites/default/files/everify/guides/InstructionsCreatePDFofE-VerifyManual.pdf" target="_blank" download>
    <figcaption class="flex flex-col gap-2">
      <h3 class="text-[16px] font-bold">${
        docu.Title.length >= 20 ? shortText(docu.Title, 15) : docu.Title
      }</h3>
      <p class="text-[10px] md:text-[12px]" title="${docu.Description}">
        ${
          docu.Description.length >= 50
            ? shortText(docu.Description, 40)
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
    <img src="${iconDocument(docu.FileLeafRef)}" alt="" class="w-16 xl:w-20 " />
  </a>`;
  });

  sliderDocuments();

  // Agrego evento hover a las cards
  const lastFileCard = document.querySelectorAll(".lastFileCard");
  lastFileCard.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "translateY(0px)";
    });
  });

  function obtaintLastDocuments(documents) {
    const sortDocuments = documents;
    sortDocuments.sort((a, b) => new Date(b.Modified) - new Date(a.Modified));
    const cutDocuments = sortDocuments.slice(0, 10);
    return cutDocuments;
  }
};

function colorLabel(categoria) {
  //Agregar más categorias si es necesario
  switch (categoria) {
    case "Decretos":
      return colors.bgBlue + " " + colors.textBlue;
    case "Resoluciones":
      return colors.bgGreen + " " + colors.textGreen;
    case "Acuerdos":
      return colors.bgYellow + " " + colors.textYellow;
    case "Circulares":
      return colors.bgRed + " " + colors.textRed;
    case "Directivas":
      return colors.bgPurple + " " + colors.textPurple;
    case "Normatividad Nacional":
      return colors.bgOrange + " " + colors.textOrange;
    case "Edicto":
      return colors.bgBlue2 + " " + colors.textBlue2;
  }
}

// Funcion para pintar los documentos
export const actionDocuments = async () => {
  const response = await getData();
  const { documents } = response;

  const secDocs = document.getElementById("secDocs");

  documents.forEach();
};

//Acciones documents
