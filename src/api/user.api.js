import { toDoBaseUrl } from "./api.js";

export const user = async () => {
  try {
    const res = await fetch(`${toDoBaseUrl}user/get-user`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error en la solicitud:", error);
  }
};
