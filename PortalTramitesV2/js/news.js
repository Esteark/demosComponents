const btnMenufilterNews = document.getElementById("btnMenufilterNews");
const secfilterNews = document.getElementById("secfilterNews");
btnMenufilterNews.addEventListener("click", () => {
  if (secfilterNews.classList.contains("max-h-0")) {
    secfilterNews.classList.remove("max-h-0");
    secfilterNews.classList.add("max-h-[500px]");
  } else {
    secfilterNews.classList.add("max-h-0");
    secfilterNews.classList.remove("max-h-[500px]");
  }
});
//Configuración de colores generales
tailwind.config = {
  theme: {
    extend: {
      colors: {
        mainColor: "#17599b",
        govColor: "#3366cc",
      },
    },
  },
};
