const showLoginBtn = document.getElementById("showLogInBtn");
const showSignUpNavBtn = document.getElementById("showSignUpNavBtn");
const showSignUpFromLoginBtn = document.getElementById("showSignUpFromLoginBtn");

showLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("login");
})

showSignUpNavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("signup");
})

showSignUpFromLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("signup");
})