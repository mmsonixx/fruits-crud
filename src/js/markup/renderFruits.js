import { getFriutsApi } from "../api/getFruitsApi";
import { makeFrutsList } from "./makeFruitsList";

const fruitList = document.querySelector(".fruits_list");

export const renderFruits = async () => {
   await getFriutsApi().then((data) => {
    fruitList.innerHTML = makeFrutsList(data);
  });
};