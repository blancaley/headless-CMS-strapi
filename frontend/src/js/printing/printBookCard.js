import { getBooks, getAudiobooks } from '../utils/data'
import { formatGenresWithSpan } from '../utils/utilities'

const LOCAL_HOST = "http://localhost:1337";
const allItemsList = document.getElementById("allItemsList");

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

export const printBookCard = (book, container) => {

  const {attributes} = book;

  const title = attributes.title;
  const author = attributes.author;
  const rating = attributes.rating;
  const pagesNum = attributes.pages;
  const url = attributes.cover.data.attributes.url;
  const username = attributes.user.data.attributes.username;
  const email = attributes.user.data.attributes.email;
  const genresArray = attributes.genres.data;

  const genresHTML = formatGenresWithSpan(genresArray);

  const bookItem = document.createElement("article");
  bookItem.classList.add("book-card");
  bookItem.innerHTML = 
    `<div id="bookOwner" class="book-owner">
    <p class="username">${username}</p>
    <p class="email">${email}</p>
    </div>
    <div id="bookDetails" class="book-details">
      <div class="book-cover">
        <img id="bookCover" src="${LOCAL_HOST}${url}" alt="${title} book cover">
      </div>
      <div class="book-info">
        <h2>${title}</h2>
        <p>By ${author}</p>
        <p>Book <span>(${pagesNum} pages)</span></p>
        <div class="rating"><i class="fa fa-star"></i>${rating}/5</div>
        <div id="genres" class="genre-tags">${genresHTML}</div>
      </div>
    </div>`

  container.prepend(bookItem);
}

export const printAudiobookCard = (book, container) => {
  const {attributes} = book;

  const title = attributes.title;
  const author = attributes.author;
  const rating = attributes.rating;
  const duration = attributes.duration;
  const url = attributes.cover.data.attributes.url;
  const username = attributes.user.data.attributes.username;
  const email = attributes.user.data.attributes.email;
  const genresArray = attributes.genres.data;

  const genresHTML = formatGenresWithSpan(genresArray);

  const bookItem = document.createElement("article");
  bookItem.classList.add("book-card");
  bookItem.innerHTML = 
    `<div id="bookOwner" class="book-owner">
      <p class="username">${username}</p>
      <p class="email">${email}</p>
    </div>
    <div id="bookDetails" class="book-details">
      <div class="book-cover">
        <img id="bookCover" src="${LOCAL_HOST}${url}" alt="${title} book cover">
      </div>
      <div class="book-info">
        <h2>${title}</h2>
        <p>By ${author}</p>
        <p>Audiobook <span>(${duration} min)</span></p>
        <div class="rating"><i class="fa fa-star"></i>${rating}/5</div>
        <div id="genres" class="genre-tags">${genresHTML}</div>
      </div>
    </div>`

  container.prepend(bookItem);
}

export const printHomePage = () => {
  if (libraryList.hidden) return;
  printLibraryList();
}