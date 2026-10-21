export const getFruitsApi = async (page = 1) => {
  try {
    const response = await fetch(
      `http://localhost:3000/fruits?_page=${page}&_per_page=3`
    );

    const result = await response.json();

  return result;
  } catch (error) {
    console.log(error.message);
  }
};