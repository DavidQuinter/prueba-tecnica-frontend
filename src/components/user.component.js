import { user } from "../api/user.api.js";
import { upperCaseFirstLetter } from "../service/string.service.js";

export const userCard = async () => {
  const userData = await user();

  const userName = upperCaseFirstLetter(userData[0].name)
  const userId = userData[0].id
  const userIcon = userName.charAt(0)
  
  const userCardContainer = document.getElementById("user-card");
  return (userCardContainer.innerHTML = `
            <div class="user-icon">${userIcon}</div>
            <div id='${userId}' class="user-name">${userName}</div>
        
        `);
};
