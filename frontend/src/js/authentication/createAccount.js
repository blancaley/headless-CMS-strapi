import { saveUserInfo } from '../utils/utilities'
import { changeActivePage } from '../utils/routing'

// Create new user and log in
export const createAccount = async () => {
  const username = document.getElementById("newUsername");
  const email = document.getElementById("newEmail");
  const password = document.getElementById("newPassword");

  await axios.post("http://localhost:1337/api/auth/local/register", {    
    username: username.value,
    email: email.value,
    password: password.value,
  }).then(response => {
    const {data} = response;
    saveUserInfo(data);
  }).then(changeActivePage("section","profile"))
}