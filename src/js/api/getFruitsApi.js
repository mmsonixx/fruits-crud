export const getFruitsApi = async (page = 1) => {
  try {
    const response = await fetch(
      `https://6ad8fa1cf89c5702ed9a5157.mockapi.io/fruits?page=${page}&limit=3`
    );

    const result = await response.json();

  return result;
  } catch (error) {
    console.log(error.message);
  }
};