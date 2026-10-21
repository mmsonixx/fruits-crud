export const updateFruitsApi = async (id, fruit) => {
  try {
    return await fetch(`https://6ad8fa1cf89c5702ed9a5157.mockapi.io/fruits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fruit),
    });
  } catch (error) {
    console.log(error.message);
  }
};
