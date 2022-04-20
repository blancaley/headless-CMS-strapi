import { changeActivePage } from '../utils/routing'
import { isLoggedIn } from '../utils/utilities'
import { getUserProfile } from '../utils/utilities'

const navBar = document.getElementById("navBar");
const navBarBtn = document.getElementById("NavBarBtn");
const showSignUpFromLoginBtn = document.getElementById("showSignUpFromLoginBtn");

export const drawNavBarBtn = () => {
  // Draw navbar based on logged in state
  if(isLoggedIn()) {
    drawLoggedInNav()
  } else {
    drawPublicNav();
  }
}

const drawLoggedInNav = () => {
  const userProfile = getUserProfile();
  const {username} = userProfile;
  navBarBtn.innerHTML =
  `<button id="addItemBtn" class="additem-btn"><i class="fa fa-plus"></i>Add item</button>
  <button id="loggedInUser" class="loggedInUser-btn"><i class="fa fa-user"></i>${username}</button>`

  // Event Listeners
  document.getElementById("addItemBtn").addEventListener("click", () => {
    changeActivePage("section", "additem");
  })
  document.getElementById("loggedInUser").addEventListener("click", () => {
    changeActivePage("section", "profile");
  })

}

const drawPublicNav = () => {
  navBarBtn.innerHTML =
  `<button id="showLogInBtn" class="login-btn">Log In</button>
  <button id="showSignUpNavBtn" class="signup-btn";>Sign Up</button>`

  // Event Listeners
  document.getElementById("showLogInBtn").addEventListener("click", () => {
    changeActivePage("section", "login");
  })
  document.getElementById("showSignUpNavBtn").addEventListener("click", () => {
    changeActivePage("section", "signup");
  })

}

showSignUpFromLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("section","signup");
})