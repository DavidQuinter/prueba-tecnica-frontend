import { deleteTask, updateTask, createTask } from "../api/task.api.js";

export const handleDeleteTask = async (taskId) => {
  try {
    const id = taskId.replace('article-', '');
    await deleteTask(id);
    const taskElement = document.getElementById(`article-${id}`);
    if (taskElement) {
      taskElement.remove();
    }
    
    return true;
  } catch (error) {
    console.error("Error al manejar la eliminación de la tarea:", error);
    return false;
  }
};

export const handleCompleteTask = async (taskId) => {
  try {
    const id = taskId.replace('article-', '');
    const updatedTask = await updateTask(id, { status: false });
    if (updatedTask) {
      const taskElement = document.getElementById(`article-${id}`);
      if (taskElement) {
        taskElement.remove();
      }
    }
    
    return true;
  } catch (error) {
    console.error("Error al manejar la completación de la tarea:", error);
    return false;
  }
};

export const handleCreateTask = async (taskData) => {
  try {
    const newTaskData = {
      ...taskData,
      status: true
    };
    
    const newTask = await createTask(newTaskData);
    return newTask;
  } catch (error) {
    console.error("Error al crear la tarea:", error);
    return null;
  }
};