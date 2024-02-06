export const infosec = () => {
  const secInfo = document.querySelectorAll(".secInfo");

  secInfo.forEach((item) => {
    item.addEventListener("click", () => {
      const icon = item.querySelector(".iconDown");
      if (item.classList.contains("max-h-14")) {
        item.classList.remove("max-h-14");
        item.classList.add("max-h-64");
        icon.classList.remove("roatate-0");
        icon.classList.add("rotate-180");
      } else {
        item.classList.remove("max-h-64");
        item.classList.add("max-h-14");
        icon.classList.add("roatate-0");
        icon.classList.remove("rotate-180");
      }
    });
  });
};
