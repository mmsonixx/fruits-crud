import { getFriuts } from "./js/api/get-fruits";
import { makeFrutsList } from "./js/markup/makeFruitsList";

const fruitList = document.querySelector(".fruits_list");


getFriuts().then((data) => {
  fruitList.innerHTML = makeFrutsList(data);
});

