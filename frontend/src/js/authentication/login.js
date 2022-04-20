import { saveUserInSessionStorage } from '../utils/utilities'
import { changeActivePage } from '../utils/routing'
import axios from 'axios';

export const login = async () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const {data} = await axios.post("http://localhost:1337/api/auth/local", {
    //identifier: "Batman",
    //password: "Batman123"
    identifier: username.value,
    password: password.value

    //admin@strapi.com
    //Admin123
  })

  // Log in with info from response
  saveUserInSessionStorage(data);
  changeActivePage("section","profile")
}