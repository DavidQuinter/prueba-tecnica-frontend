import { bgImage } from "./src/api/images.api.js";
import { userCard } from "./src/components/user.component.js";
import { dateToday } from "./src/components/date.component.js";
import { taskComponent } from "./src/components/task.component.js";
import { toggleTaskForm } from "./src/service/createTask.service.js";
import { initializeTaskForm } from "./src/service/createTask.service.js";

const body = document.getElementById("root");

const bodyRender = async () => {
  const imageData = await bgImage();

  const firstPhoto = imageData.photos[0];
  const smallImageUrl = firstPhoto.src.large;

  console.log(smallImageUrl);
  body.style.backgroundImage = `url(${smallImageUrl})`;
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat"; 
};

const addTaskButton = document.getElementById('add-task');
const cancelAddTask = document.getElementById('cancel')
if (addTaskButton) {
  addTaskButton.addEventListener('click', toggleTaskForm);
}
if(cancelAddTask){
    cancelAddTask.addEventListener('click', toggleTaskForm)
}

bodyRender();
userCard()
dateToday()
taskComponent()
initializeTaskForm()
