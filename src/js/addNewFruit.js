import { addFruitApi } from "./api/addFruit.js";
import { getFriuts } from "./api/get-fruits.js";
import { renderFruits } from "../index.js";
import { renderFruits } from "./markup/renderFruits.js";
const form = document.querySelector("[data-form]");
const titleFruit = document.querySelector("[data-title]");
const linkFruit = document.querySelector("[data-description]");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const elements = event.target.elements;
  const title = elements.title.value;
  const img = elements.img.value;
  const description = elements.description.value;
  const fruit = { title: title, photo: img, description: description };
  await addFruitApi(fruit);
  await renderFruits();
  form.reset();
});
