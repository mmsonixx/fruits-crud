import { addFruit } from "../fruitsOperations/addNewFruit";
import { deleteFruit } from "../fruitsOperations/deleteFruit";
import { renderFruits } from "./renderFruits";
import { updateFruit } from "../fruitsOperations/updateFruit";

const startEvents = async () => {
  document.addEventListener("click", deleteFruit);

  const form = document.querySelector("[data-form]");
  form.addEventListener("submit", addFruit);

  document.addEventListener("click", updateFruit);
};

export const renderPage = async () => {
  await renderFruits();
  await startEvents();
};
