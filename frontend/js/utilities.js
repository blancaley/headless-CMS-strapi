const saveUserInfo = (data) => {
  const token = data.jwt;
  const userProfile = data.user;
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
}