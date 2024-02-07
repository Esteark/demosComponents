import { renderPagination } from "./paintFunctions.js";
import { getData } from "./services.js";

let tramites = [];
async function obtainData() {
  tramites = await getData();
  renderPagination(tramites);
}

(function () {
  obtainData();

  // Acciones para el filtrado
})();
