export const addFruitApi = async (newFruit) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newFruit),
    };
    // await fetch("http://localhost:3000/fruits", options);
     await fetch("https://6ad8fa1cf89c5702ed9a5157.mockapi.io/fruits", options);
  } catch (error) {
    console.log(error.message);
  }
};
