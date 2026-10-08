export const updateFruitsApi = async (id, fruit) => {
  try {
    return await fetch(`http://localhost:3000/fruits/${id}`, {
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
