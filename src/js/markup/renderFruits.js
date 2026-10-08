import { getFriuts } from "../api/get-fruits";
import { makeFrutsList } from "./makeFruitsList";

const fruitList = document.querySelector(".fruits_list");

export const renderFruits = async () => {
   await getFriuts().then((data) => {
    fruitList.innerHTML = makeFrutsList(data);
  });
};