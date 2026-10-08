import { getFriuts } from "./js/api/get-fruits";
import { makeFrutsList } from "./js/markup/makeFruitsList";
import { deleteFruit } from "./js/api/deleteFruit";
import { renderFruits } from "./js/markup/renderFruits";

renderFruits();

document.addEventListener("click", function (event) {
  if (!event.target.classList.contains("fruit_button-delete")) {
    return;
  }

  const elementId = event.target.dataset.id;

  deleteFruit(elementId).then(() => {
    console.log("Фрукт удалён");
    renderFruits();
  });
});
