//отримання фрруктів
export const getFriuts = () => {
  return fetch("http://localhost:3000/fruits").then((response) => {
    return response.json();
  });
};
