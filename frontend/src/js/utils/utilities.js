const HOME_PAGE_URL = "http://127.0.0.1:5500/frontend/index.html";
// Session Storage
export const saveUserInSessionStorage = (data) => {
  const token = data.jwt;
  const userProfile = data.user;
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
}

export const getUserProfile = () => {
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
  return userProfile;
}

export const getToken = () => {
  return sessionStorage.getItem("token");
}

//Check if user is logged in
export const isLoggedIn = () => {
  const token = getToken();
  if(token) return true;
  return false;
}

export const logOut = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userProfile");

  location.href = HOME_PAGE_URL;
}

// Formatting HTML templates
export const formatGenresWithSpan = (genresArray) => {
  return genresArray?.reduce((genresHTML, genre) => {
    const { attributes: { name }} = genre;
    return genresHTML + `<span>${name}</span>`
  }, "")
}