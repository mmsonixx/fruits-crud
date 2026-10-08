export const addFruitApi = async (newFruit) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newFruit),
    };
    await fetch("http://localhost:3000/fruits", options);
  } catch (error) {
    console.log(error.message);
  }
};
