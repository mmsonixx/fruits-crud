import { addFruitApi } from "../api/addFruitApi.js";
import { renderFruits } from "../markup/renderFruits.js";

export const addFruit = async (event) => {
 const form = document.querySelector("[data-form]");

    event.preventDefault();
    const elements = event.target.elements;
    const title = elements.title.value;
    const img = elements.img.value;
    const description = elements.description.value;
    const fruit = { title: title, photo: img, description: description };
    await addFruitApi(fruit);
    // .catch(() => {
    //     console.error("error")
    // });
    await renderFruits();
    form.reset();
};
