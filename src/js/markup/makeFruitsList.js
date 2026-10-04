export const makeFrutsList = (fruits) => {
  const markup = fruits
    .map(
      (fruit) => `<li class="fruit_item" data-id="${fruit.id}">
    <h2 class="friut_title">${fruit.title}</h2>
        <img src="${fruit.photo}" alt="${fruit.title}" class="fruit_img">
        <p class="fruit_description">${fruit.description}</p>
        <div class="button__wrapper">
       <button class="fruit_button-delete" type="button" data-id="${fruit.id}">
            Delete
          </button>
           <button class="fruit_button-update" type="button" data-id="${fruit.id}">
          Update
          </button>
          </div>
</li>`,
    )
    .join("");
  return markup;
};
