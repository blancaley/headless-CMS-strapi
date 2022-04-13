// Session Storage
const saveUserInfo = (data) => {
  const token = data.jwt;
  const userProfile = data.user;
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
}

const getUserProfile = () => {
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
  return userProfile;
}

const getToken = () => {
  return sessionStorage.getItem("token");
}

// Check if user is logged in
// const isLoggedIn = () => {
//   const token = getToken();
//   if(token) return true;
//   return false;
// }

// Formatting HTML templates
const formatGenresWithSpan = (genresArray) => {
  return genresArray?.reduce((genresHTML, genre) => {
    const { attributes: { name }} = genre;
    return genresHTML + `<span>${name}</span>`
  }, "")
}