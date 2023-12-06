import { icons } from "./icons.js";

export function shortText(texto, longitudMaxima) {
  if (texto.length <= longitudMaxima) {
    return texto;
  } else {
    return texto.substring(0, longitudMaxima) + "...";
  }
}

export function iconDocument(name) {
  const splitArchive = name.split(".");
  // Verifico si hay más de un punto en el nombre del archivo
  let file = "";
  splitArchive.length > 1
    ? // Tomo la última parte como la extensión del archivo
      (file = splitArchive[splitArchive.length - 1])
    : // si No hay más de un punto, podría ser que no haya extensión o que el punto esté en el nombre en este caso tomo el nombre del archivo como vacío
      file;
  switch (file) {
    case "doc":
      return icons.doc;
    case "docx":
      return icons.doc;
    case "xlsx":
      return icons.xls;
    case "xls":
      return icons.xls;
    case "csv":
      return icons.cvs;
    case "pdf":
      return icons.pdf;
    case "txt":
      return icons.txt;
    case "ppt":
      return icons.ppt;
    case "pptx":
      return icons.ppt;
    case "mp3":
      return icons.audio;
    case "mp4":
      return icons.video;
    case "wav":
      return icons.audio;
    case "mov":
      return icons.video;
    default:
      return icons.file;
  }
}
