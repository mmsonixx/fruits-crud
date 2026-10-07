export const updateFruits = (id, fruit) => {
  return fetch(`http://localhost:3000/fruits/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fruit),
  });
};