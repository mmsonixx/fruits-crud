import { updateFruits } from "./api/updateFruits.js";
import { renderFruits } from "../index.js";
import { renderFruits } from "./markup/renderFruits.js";

const form = document.querySelector("[data-modal-form]");
const modal = document.querySelector("[data-modal]");
const closeBtn = document.querySelector(".close-btn");

let fruitId = null;

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("fruit_button-update")) {
    return;
  }

  fruitId = event.target.dataset.id;

  console.log("ID:", fruitId);

  modal.classList.remove("is-hidden");
});

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

  await updateFruits(fruitId, fruit);
  modal.classList.add("is-hidden");
  form.reset();
  await renderFruits();
});
