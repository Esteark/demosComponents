import { infosec } from "./infosec.js";

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
  infosec();
})();
