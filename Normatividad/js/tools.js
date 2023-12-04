export function shortText(texto, longitudMaxima) {
  if (texto.length <= longitudMaxima) {
    return texto;
  } else {
    return texto.substring(0, longitudMaxima) + "...";
  }
}
