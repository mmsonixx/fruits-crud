//отримання фрруктів
export const getFriutsApi = async () => {
  try {
    return await fetch("http://localhost:3000/fruits").then((response) => {
      return response.json();
    });
  } catch (error) {
    console.log(error.message);
  }
};
