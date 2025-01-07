const API_KEY = "eBWYRYF15foCrgt9AI9TiuuPDF3sBkT6tN4JDIPS3H85vMJTkxn0nyfY";
const baseURL = "https://api.pexels.com/v1/";

export const bgImage = async () => {
  try {
    const response = await fetch(`${baseURL}search?query=escena-tranquila-de-bosque-con-arboles-altos&per_page=1`, {
      method: 'GET',
      headers: {
        'Authorization': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};
