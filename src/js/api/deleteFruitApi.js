export const deleteFruitApi = async (id) => {
  try {
    return await fetch(`http://localhost:3000/fruits/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error.message);
  }
};
