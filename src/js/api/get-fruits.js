//отримання фрруктів
export const getFriuts = async  () => {
  return  await fetch("http://localhost:3000/fruits").then((response) => {
    return response.json();
  });
};
