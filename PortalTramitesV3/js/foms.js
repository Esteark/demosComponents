(function () {
  tippy("#docs1", {
    content:
      "Por favor, adjunte fotocopia o imagen del documento de identidad del titular del LADO DE FRENTE. El tamaño máximo del archivo debe ser de 150 MB. Extensiones permitidas: (.doc, .xls, .xlsx, .ppt, .tif, .jpg, .gif, .pdf, .txt, .rar, .zip, .csv, .odt, .avi, .img, .tar, .docx, .ods, .mp4, .mp3).",
    followCursor: true,
  });

  tippy("#docs2", {
    content:
      "Por favor, adjunte fotocopia o imagen del documento de identidad del titular del LADO DE FRENTE. El tamaño máximo del archivo debe ser de 150 MB. Extensiones permitidas: (.doc, .xls, .xlsx, .ppt, .tif, .jpg, .gif, .pdf, .txt, .rar, .zip, .csv, .odt, .avi, .img, .tar, .docx, .ods, .mp4, .mp3).",
    followCursor: true,
  });

  //Seccion de información
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
      console.log("click");
    });
  });
})();
