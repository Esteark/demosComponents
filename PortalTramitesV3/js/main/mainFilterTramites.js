import { infosec } from "./infosec.js";

(function () {
  //Funcionalidad tramites
  const secfilter = document.querySelectorAll(".secfilter");

  secfilter.forEach((item) => {
    item.addEventListener("click", () => {
      const icon = item.querySelector(".iconDown");
      if (item.classList.contains("max-h-12")) {
        item.classList.remove("max-h-12");
        item.classList.add("max-h-[200px]");
        icon.classList.remove("rotate-0");
        icon.classList.add("rotate-180");
      } else {
        item.classList.remove("max-h-[200px]");
        item.classList.add("max-h-12");
        icon.classList.remove("rotate-180");
        icon.classList.add("rotate-0");
      }
    });
  });

  infosec();
})();
