import { addFruit } from "../fruitsOperations/addNewFruit";
import { deleteFruit } from "../fruitsOperations/deleteFruit";
import { renderFruits } from "./renderFruits";
import { updateFruit } from "../fruitsOperations/updateFruit";
import { loadMoreFruits } from "../fruitsOperations/loadMoreFruits";

const startEvents = async () => {
  document.addEventListener("click", deleteFruit);

  const form = document.querySelector("[data-form]");
  form.addEventListener("submit", addFruit);

  document.addEventListener("click", updateFruit);

  const moreBtn = document.querySelector(".moreFruits");
moreBtn.addEventListener("click", loadMoreFruits);
};

export const renderPage = async () => {
  await renderFruits();
  await startEvents();
};
