import { changeActivePage } from '../utils/routing'
import { getUserProfile, isLoggedIn, logOut } from '../utils/utilities'
import { getBooks, getAudiobooks } from '../utils/data'
import { printBookCard, printAudiobookCard } from '../printing/printBookCard'

export const drawProfilePage = () => {
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
    <button id="logOutBtn">Log Out</button>`

  // Event Listener
  document.getElementById("logOutBtn").addEventListener("click", () => {
    logOut();
  })
}

const drawUserItems = async (user) => {
  // ID from logged in user
  const {id} = user;

  const userItemsList = document.getElementById("userItemsList");

  const books = await getBooks();
  const audiobooks = await getAudiobooks();

  if (books || audiobooks) {
    const userItems = document.getElementById("userItems");
    const myBooksSubtitle = document.createElement("h2");
    myBooksSubtitle.classList.add("subtitle");
    myBooksSubtitle.innerText = "My Books";
    userItems.prepend(myBooksSubtitle);
  }

  books.forEach(book => {
    // userID from book 
    const {attributes: {userID}} = book;
    
    if (userID === id) {
      printBookCard(book, userItemsList)
    }
  });

  audiobooks.forEach(audiobook => {
    // userID from book 
    const {attributes: {userID}} = audiobook;
    
    if (userID === id) {
      printAudiobookCard(audiobook, userItemsList)
    }
  });
}