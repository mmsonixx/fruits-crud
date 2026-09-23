export const addFruitApi = (newFruit) => {
  const options = {
    method: "POST",
    body: JSON.stringify(newFruit),
  };
  fetch("http://localhost:3000/fruits", options);
};
