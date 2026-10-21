import { getFruitsApi } from "../api/getFruitsApi";
import { makeFrutsList } from "./makeFruitsList";

const fruitList = document.querySelector(".fruits_list");

export const renderFruits = async () => {
  const result = await getFruitsApi(1);

  fruitList.innerHTML = makeFrutsList(result.data);

  document.querySelector(".moreFruits").hidden =
    result.next === null;
};