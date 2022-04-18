const profile = document.getElementById("profile")

const drawProfilePage = () => {
  if (profile.hidden) return;

  // If not logged in re-direct to login page
  if (!isLoggedIn()) {
    changeActivePage("section","login");
  } 

  const user = getUserProfile();

  drawUserInfo(user);
  drawUserItems(user);
}

const drawUserInfo = (user) => {
  const {username, email, id, createdAt} = user;

  const userInfo = document.getElementById("userInfo")

  userInfo.innerHTML = 
    `<h1>${username}</h1>
    <p>${email}</p>
    <p>ID: ${id}</p>
    <p>Joined ${createdAt}</p>
    <button onclick="logOut()">Log Out</button>`
}

const drawUserItems = async (user) => {
  // ID from logged in user
  const {id} = user;

  const userItems = document.getElementById("userItems");

  const books = await getBooks();
  const audiobooks = await getAudiobooks();

  books.forEach(book => {
    // userID from book 
    const {attributes: {userID}} = book;
    
    if (userID === id) {
      printBookCard(book, userItems)
    }
  });

  audiobooks.forEach(audiobook => {
    // userID from book 
    const {attributes: {userID}} = audiobook;
    
    if (userID === id) {
      printAudiobookCard(audiobook, userItems)
    }
  });
}

drawProfilePage();