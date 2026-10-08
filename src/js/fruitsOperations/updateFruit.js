import { updateFruitsApi } from "../api/updateFruitsApi.js";
import { renderFruits } from "../markup/renderFruits.js";

const form = document.querySelector("[data-modal-form]");
const modal = document.querySelector("[data-modal]");
const closeBtn = document.querySelector(".close-btn");

let fruitId = null;

export const updateFruit = async (event) => {
  if (!event.target.classList.contains("fruit_button-update")) {
    return;
  }

  fruitId = event.target.dataset.id;

  modal.classList.remove("is-hidden");

  closeBtn.addEventListener("click", () => {
    modal.classList.add("is-hidden");
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const elements = event.target.elements;
    const title = elements.title.value;
    const img = elements.img.value;
    const description = elements.description.value;
    const fruit = {
      title: title,
      photo: img,
      description: description,
    };

    await updateFruitsApi(fruitId, fruit);
    modal.classList.add("is-hidden");
    form.reset();
    await renderFruits();
  });
};
