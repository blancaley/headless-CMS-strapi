import { getToken, getUserProfile } from '../utils/utilities';
import { changeActivePage } from '../utils/routing';
import axios from 'axios';

export const addBook = async () => {
  const bookTitle = document.getElementById("bookTitle");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const selectedGenres = document.querySelectorAll("input[type=checkbox]:checked");
  const rating = document.getElementById("rating");

  const genresList = Array.from(selectedGenres).map(genre => {
    return parseInt(genre.value);
  })
  // Get userID
  const user = getUserProfile();
  const userID = user.id;
  
  // Get the image and put it in a FormData
  const cover = document.getElementById("cover").files;
  const imgData = new FormData();
  imgData.append("files", cover[0]);

  // Upload image to Strapi
  const uploadBookResponse = await axios.post("http://localhost:1337/api/upload", imgData, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

  const imageId = uploadBookResponse.data[0].id;

  await axios.post("http://localhost:1337/api/books", {
    data: {
      title: bookTitle.value,
      author: author.value,
      pages: pages.value,
      rating: rating.value,
      genres: genresList,
      cover: imageId,
      // Strapi userID
      user: [userID],
      // Own userID to get book and user relation
      userID: userID
    }
  },
  {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

  changeActivePage("section","profile");
}

export const addAudiobook = async () => {
  const bookTitle = document.getElementById("bookTitle");
  const author = document.getElementById("author");
  const duration = document.getElementById("duration");
  const publicationDate = document.getElementById("publicationDate");
  const selectedGenres = document.querySelectorAll("input[type=checkbox]:checked");
  const rating = document.getElementById("rating");
  
  const genresList = Array.from(selectedGenres).map(genre => {
    return parseInt(genre.value);
  })

  // Get userID
  const user = getUserProfile();
  const userID = user.id;

  // Get the image and put it in a FormData
  const cover = document.getElementById("cover").files;
  const imgData = new FormData();
  imgData.append("files", cover[0]);

  // Upload image to Strapi
  const uploadBookResponse = await axios.post("http://localhost:1337/api/upload", imgData, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

  // Get image id from uploaded image
  const imageId = uploadBookResponse.data[0].id;

  await axios.post("http://localhost:1337/api/audiobooks", {
    data: {
      title: bookTitle.value,
      author: author.value,
      duration: duration.value,
      publicationDate: publicationDate.value,
      genres: genresList,
      rating: rating.value,
      cover: imageId,
      // Strapi userID
      user: [userID],
      // Own userID to get book and user relation
      userID: userID
    }
  },
  {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

  changeActivePage("section","profile");
}
