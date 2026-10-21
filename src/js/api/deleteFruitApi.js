export const deleteFruitApi = async (id) => {
  try {
    return await fetch(`https://6ad8fa1cf89c5702ed9a5157.mockapi.io/fruits/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error.message);
  }
};
