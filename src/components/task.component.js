import { getTask } from "../api/task.api.js";
import {
  handleCompleteTask,
  handleDeleteTask,
} from "../service/task.service.js";

export const taskComponent = async () => {
  const allTask = await getTask();
  // console.log(allTask);

  const taskContainer = document.getElementById("task");

  if (!taskContainer) {
    console.error("El contenedor 'task' no existe en el DOM.");
    return;
  }

  const taskHTML = allTask
    .filter((task) => task.status !== false)
    .map(
      (task) => `
        <article id="article-${task.id}" class="task-container">
          <div class="task-component" data-options="hide">
            <div class="task-text">
              <p class="task-title">${task.title || "Sin título"}</p>
              <p class="task-description">${
                task.description || "Sin descripción"
              }</p>
            </div>
            <div class="task-menu">
              <button class="material-symbols-outlined">menu</button>
            </div>
            <div class="task-options">
              <button class="btn-delete material-symbols-outlined">delete</button>
              <button class="btn-check material-symbols-outlined">check_circle</button>
            </div>
          </div>
        </article>`
    )
    .join("");
  taskContainer.innerHTML = taskHTML;

  taskContainer.addEventListener("click", async (e) => {
    if (
      e.target.classList.contains("material-symbols-outlined") &&
      e.target.textContent === "menu"
    ) {
      const taskArticle = e.target.closest(".task-component");
      if (taskArticle) {
        const currentState = taskArticle.getAttribute("data-options");
        const newState = currentState === "hide" ? "show" : "hide";
        taskArticle.setAttribute("data-options", newState);
      }
    }

    if (e.target.classList.contains("btn-delete")) {
      const taskArticle = e.target.closest(".task-container");
      if (taskArticle) {
        const success = await handleDeleteTask(taskArticle.id);
        if (!success) {
          alert("No se pudo eliminar la tarea");
        }
      }
    }
    
    if (e.target.classList.contains("btn-check")) {
      const taskArticle = e.target.closest(".task-container");
      if (taskArticle) {
        const success = await handleCompleteTask(taskArticle.id);
        if (!success) {
          alert("No se pudo completar la tarea");
        }
      }
    }
  });
};
