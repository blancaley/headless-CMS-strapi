const profile = document.getElementById("profile")

const drawProfilePage = () => {
  if (profile.hidden) return;

  drawUserInfo();
  drawUserItems();
}

const drawUserInfo = () => {
  const userProfile = getUserProfile();
  const {username, email, id, createdAt} = userProfile;

  const userInfo = document.getElementById("userInfo")

  userInfo.innerHTML = 
    `<h1>${username}</h1>
    <p>${email}</p>
    <p>ID: ${id}</p>
    <p>Joined ${createdAt}</p>`
}

const drawUserItems = async () => {
  const userItems = document.getElementById("userItems");

  //const response = await axios.get("")
}

drawProfilePage();