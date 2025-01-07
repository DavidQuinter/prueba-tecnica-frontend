import { handleCreateTask } from "./task.service.js";
import { showAlert } from "./alert.service.js";
import { taskComponent } from "../components/task.component.js";

export const toggleTaskForm = () => {
  const formSection = document.getElementById("form-task");
  if (formSection) {
    const currentState = formSection.getAttribute("data-form-task");
    const newState = currentState === "hide" ? "show" : "hide";
    formSection.setAttribute("data-form-task", newState);
  }
};

export const initializeTaskForm = () => {
  const addButton = document.querySelector(
    ".form-new-task .btn-primary:not(.cancel)"
  );
  const titleInput = document.querySelector(".title-input");
  const descriptionInput = document.querySelector(".description-input");

  if (addButton) {
    addButton.addEventListener("click", async (e) => {
      e.preventDefault(); 

      //console.log("Botón de añadir click"); 

      if (!titleInput.value.trim() || !descriptionInput.value.trim()) {
        showAlert("Por favor completa todos los campos", "error");
        return;
      }

      const newTaskData = {
        title: titleInput.value.trim(),
        description: descriptionInput.value.trim(),
      };
      //console.log(" nueva tarea:", newTaskData); 
      const newTask = await handleCreateTask(newTaskData);

      if (newTask) {
        showAlert("¡Tarea creada exitosamente!");

        titleInput.value = "";
        descriptionInput.value = "";

        toggleTaskForm();

        await taskComponent();
      } else {
        showAlert("Error al crear la tarea", "error");
      }
    });
  }
};
