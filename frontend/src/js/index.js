import { drawNavBarBtn } from './printing/navigationButtons'
import { printHomePage } from './printing/printBookCard'

import { createAccount } from './authentication/createAccount'
import { drawProfilePage } from './authentication/profile'
import { login } from './authentication/login'

import "../scss/style.scss"

const signUpBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");

drawNavBarBtn();
printHomePage();
drawProfilePage();

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createAccount();
})

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
})

