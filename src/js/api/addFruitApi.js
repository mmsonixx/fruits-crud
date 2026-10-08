export const addFruitApi =  async (newFruit) => {
  const options = {
    method: "POST",
    body: JSON.stringify(newFruit),
  };
   await fetch("http://localhost:3000/fruits", options);
};
