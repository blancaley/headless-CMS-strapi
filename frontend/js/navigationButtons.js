const navBar = document.getElementById("navBar");
const navBarBtn = document.getElementById("NavBarBtn");
const showSignUpFromLoginBtn = document.getElementById("showSignUpFromLoginBtn");

const drawNavBarBtn = () => {
  // Check if user is logged in
  let isLoggedIn;
  const token = getToken();
  if(token) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  // Draw nav bar based on logged in state
  if(isLoggedIn) {
    drawLoggedInNav()
  } else {
    drawPublicNav();
  }
}

const drawLoggedInNav = () => {
  const userProfile = getUserProfile();
  const {username} = userProfile;
  navBarBtn.innerHTML =
  `<button id="loggedInUser" onclick=changeActivePage("profile")><i class="fa fa-user"></i>${username}</button>`
}

const drawPublicNav = () => {
  navBarBtn.innerHTML =
  `<button id="showLogInBtn" onclick=changeActivePage("login")>Log In</button>
  <button id="showSignUpNavBtn" onclick=changeActivePage("signup");>Sign Up</button>`
}

showSignUpFromLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("signup");
})