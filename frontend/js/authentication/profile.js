const profile = document.getElementById("profile")

const drawProfilePage = () => {
  if (profile.hidden) return;

  const userInfo = document.getElementById("userInfo")
  const userItems = document.getElementById("userItems")

  userInfo.innerText = "HELLO, im from profile.js"
}

drawProfilePage();