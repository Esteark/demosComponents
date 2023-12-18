import { icons } from "./icons.js";
import { colors } from "./varsColors.js";

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

export function colorLabel(categoria) {
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
export function dateFormater(date) {
  const fecha = new Date(date);

  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses en JavaScript son de 0 a 11
  const año = fecha.getFullYear();

  // Formatear la cadena de fecha con ceros a la izquierda si es necesario
  const diaStr = dia < 10 ? "0" + dia : dia;
  const mesStr = mes < 10 ? "0" + mes : mes;

  // Construir la cadena de fecha en formato dd/mm/yyyy
  var dateformater = diaStr + "/" + mesStr + "/" + año;

  return dateformater;
}

// funcion para obtener los ultimos documentos
export function obtaintLastDocuments(documents, cant) {
  const sortDocuments = documents;
  sortDocuments.sort((a, b) => new Date(b.Modified) - new Date(a.Modified));

  if (cant != 0) {
    const cutDocuments = sortDocuments.slice(0, cant);
    return cutDocuments;
  }
  return sortDocuments;
}

export const datePicker = () => {
  flatpickr("#dateStart", {
    dateFormat: "d/m/Y", // Formato de fecha
    enableTime: true, // Habilitar selección de tiempo
    minDate: "today", // Fecha mínima permitida
    maxDate: "2100-12-31", // Fecha máxima permitida
    locale: "es", // Configuración regional (en este caso, español)
    onClose: function (selectedDates, dateStr, instance) {
      console.log("Fecha seleccionada:", dateStr);
    },
    // Más opciones y eventos aquí
  });
};
