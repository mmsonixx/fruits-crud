import { getFruitsApi } from "../api/getFruitsApi";
import { makeFrutsList } from "../markup/makeFruitsList";

const fruitList = document.querySelector(".fruits_list");
const moreBtn = document.querySelector(".moreFruits");

let page = 2;

export const loadMoreFruits = async () => {
  const result = await getFruitsApi(page);

  if (!result || !Array.isArray(result.data)) return;

  if (result.data.length === 0) {
    moreBtn.hidden = true;
    return;
  }

  fruitList.insertAdjacentHTML(
    "beforeend",
    makeFrutsList(result.data)
  );

  if (result.next === null) {
    moreBtn.hidden = true;
    return;
  }

  page++;
};