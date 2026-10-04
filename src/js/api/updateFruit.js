export const updateFruit = (id) => {
  return fetch(`http://localhost:3000/fruits/${id}`, {
    method: "PATCH",
  });
};