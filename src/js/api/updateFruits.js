export const updateFruits = async (id, fruit) => {
  return await fetch(`http://localhost:3000/fruits/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fruit),
  });
};