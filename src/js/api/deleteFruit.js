export const deleteFruit = (id) => {
  return fetch(`http://localhost:3000/fruits/${id}`, {
    method: "DELETE",
  });
};
