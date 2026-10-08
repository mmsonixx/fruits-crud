export const deleteFruit = async (id) => {
  return await fetch(`http://localhost:3000/fruits/${id}`, {
    method: "DELETE",
  });
};
