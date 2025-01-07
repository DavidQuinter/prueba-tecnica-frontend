import { toDoBaseUrl } from "./api.js";

export const getTask = async() => {
  try {
    const res = await fetch(`${toDoBaseUrl}/tasks`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error en la solicitud:", error);
    throw error;
  }
};

export const deleteTask = async(id) => {
  try {
    const res = await fetch(`${toDoBaseUrl}/tasks/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.log("Error al eliminar la tarea:", error);
    throw error;
  }
};

export const updateTask = async(id, updateData) => {
  try {
    const res = await fetch(`${toDoBaseUrl}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData)
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.log("Error al actualizar la tarea:", error);
    throw error;
  }
};

export const createTask = async(taskData) => {
  try {
    const res = await fetch(`${toDoBaseUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData)
    });
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.log("Error al crear la tarea:", error);
    throw error;
  }
};