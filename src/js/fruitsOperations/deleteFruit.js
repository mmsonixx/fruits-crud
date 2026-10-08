import { deleteFruitApi } from "../api/deleteFruitApi";
import { renderFruits } from "../markup/renderFruits";

export const deleteFruit = async (event) => {
  if (!event.target.classList.contains("fruit_button-delete")) {
    return;
  } else {
    const elementId = event.target.dataset.id;

    await deleteFruitApi(elementId).then(async () => {
      await renderFruits();
    });
  }
};
