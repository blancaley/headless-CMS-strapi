const loginBtn = document.getElementById("loginBtn");

const login = async () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const {data} = await axios.post("http://localhost:1337/api/auth/local", {
    identifier: "Batman",
    password: "Batman123"
    // identifier: username.value,
    // password: password.value
  })

  const token = data.jwt;
  sessionStorage.setItem("token", token);

  changeActivePage("profile")
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
})