const showLoginBtn = document.getElementById("showLogInBtn");
const showSignUpBtn = document.getElementById("showSignUpBtn");

showLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("login");
})

showSignUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("signup");
})