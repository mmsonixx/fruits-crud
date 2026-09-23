export const makeFrutsList = (fruits) => {
  const markup = fruits
    .map(
      (fruit) => `<li class="fruit_item">
    <h2 class="friut_title">${fruit.title}</h2>
        <img src="${fruit.photo}" alt="${fruit.title}" class="fruit_img">
        <p class="fruit_description">${fruit.description}</p>
    
</li>`,
    )
    .join("");
  return markup;
};
