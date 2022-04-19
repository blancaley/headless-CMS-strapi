import { getBooks, getAudiobooks } from '../utils/data'
import { formatGenresWithSpan } from '../utils/utilities'

const LOCAL_HOST = "http://localhost:1337";
const allItemsList = document.getElementById("allItemsList");

//const profile = document.getElementById("profile");

export const printLibraryList = async () => {
  const books = await getBooks();
  const audiobooks = await getAudiobooks();

  books.forEach(book => {
    printBookCard(book, allItemsList);
  });

  audiobooks.forEach(audiobook => {
    printAudiobookCard(audiobook, allItemsList);
  });
}

export const printBookCard = async (book, container) => {
  const { attributes: { title, author, rating, pages:pagesNum, 
    cover: { data: { attributes: {url}}},
    user: { data: { attributes: { username, email}}},
    genres: { data: genresArray}}} = book;

  const genresHTML = formatGenresWithSpan(genresArray)

  const bookItem = document.createElement("article");
  bookItem.classList.add("book-card");
  bookItem.innerHTML = 
    `<div id="bookOwner" class="book-owner">
    <p>${username}</p>
    <p>${email}</p>
    </div>
    <div id="bookDetails" class="book-details">
      <div class="book-cover">
        <img id="bookCover" src="${LOCAL_HOST}${url}" alt="${title} book cover">
      </div>
      <div class="book-info">
        <h2>${title}</h2>
        <p>By ${author}</p>
        <p>Book <span>(${pagesNum} pages)</span></p>
        <div><i class="fa fa-star"></i>${rating}/5</div>
        <div id="genres">${genresHTML}</div>
      </div>
    </div>`

  container.prepend(bookItem);
}

export const printAudiobookCard = async (book, container) => {
  const { attributes: { title, author, rating, duration, 
    cover: { data: { attributes: {url}}},
    user: { data: { attributes: { username, email}}},
    genres: { data: genresArray}}} = book;

  const genresHTML = formatGenresWithSpan(genresArray)

  const bookItem = document.createElement("article");
  bookItem.innerHTML = 
    `<div id="bookOwner">
    <p>${username}</p>
    <p>${email}</p>
    </div>
    <div id="bookDetails">
      <img id="bookCover" src="${LOCAL_HOST}${url}" alt="${title} book cover">
      <h2>${title}</h2>
      <p>By ${author}</p>
      <p>Audiobook <span>(${duration} min)</span></p>
      <div><i class="fa fa-star"></i>${rating}/5</div>
      <div id="genres">${genresHTML}</div>
    </div>`

  container.prepend(bookItem);
}

export const printHomePage = () => {
  if (libraryList.hidden) return;
  printLibraryList();
}