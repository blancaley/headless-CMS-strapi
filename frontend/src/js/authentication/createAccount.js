import { saveUserInSessionStorage } from '../utils/utilities'
import { changeActivePage } from '../utils/routing'
import axios from 'axios';

export const createAccount = async () => {
  const username = document.getElementById("newUsername");
  const email = document.getElementById("newEmail");
  const password = document.getElementById("newPassword");

  // Create new user
  const {data} = await axios.post("http://localhost:1337/api/auth/local/register", {    
      username: username.value,
      email: email.value,
      password: password.value,
    }
  )

  // Log in with info from response
  saveUserInSessionStorage(data);
  changeActivePage("section","profile")
}