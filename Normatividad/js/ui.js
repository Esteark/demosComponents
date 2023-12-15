import {
  actionDocuments,
  printSliderDocuments,
  printSliderFilters,
} from "./paintFuntions.js";

//Funcion principal que llamará a todas las acciones en el front
export function funcionUI() {
  printSliderFilters();
  printSliderDocuments();
  actionDocuments();
}
