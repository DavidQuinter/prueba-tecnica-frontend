import { getTodayDate } from "../service/date.service.js";

export const dateToday = () => {
    const todayDate = getTodayDate()
  const dateContainer = document.getElementById("date");
  dateContainer.innerHTML = `
        <p class='dateComponent'><span>Today</span><span class='dateTime'>${todayDate[0]}, ${todayDate[1]} de ${todayDate[2]} ${todayDate[3]}</span>
        </p>
        `;
};
