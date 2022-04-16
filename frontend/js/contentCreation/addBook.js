const addBook = async () => {
  const bookTitle = document.getElementById("bookTitle");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const rating = document.getElementById("rating");

  // Get userID
  const user = getUserProfile();
  const userID = [user.id];
  
  // Get the image and put it in a FormData
  const cover = document.getElementById("cover").files;
  const imgData = new FormData();
  imgData.append("files", cover[0]);

  // Upload image to Strapi
  axios.post("http://localhost:1337/api/upload", imgData, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }).then(response => {
    // Get the image id and put it in the new book
    const imageId = response.data[0].id;
    axios.post("http://localhost:1337/api/books", {
      data: {
        title: bookTitle.value,
        author: author.value,
        pages: pages.value,
        rating: rating.value,
        cover: imageId,
        user: userID
      }
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  })
}

const addAudiobook = async () => {
  const bookTitle = document.getElementById("bookTitle");
  const author = document.getElementById("author");
  const duration = document.getElementById("duration");
  const publicationDate = document.getElementById("publicationDate");
  const selectedGenres = document.querySelectorAll("input[type=checkbox]:checked");
  const rating = document.getElementById("rating");

  // const genresList = Array.from(selectedGenres).map(genre => {
  //   return parseInt(genre.value)
  // })

  // Get userID
  const user = getUserProfile();
  const userID = [user.id];

  // Get the image and put it in a FormData
  const cover = document.getElementById("cover").files;
  const imgData = new FormData();
  imgData.append("files", cover[0]);

   // Upload image to Strapi
   axios.post("http://localhost:1337/api/upload", imgData, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }).then(response => {
    // Get the image id and put it in the new book
    const imageId = response.data[0].id;
    axios.post("http://localhost:1337/api/audiobooks", {
      data: {
        title: bookTitle.value,
        author: author.value,
        duration: duration.value,
        publicationDate: publicationDate.value,
        //genre: [1],
        //{data: genresList},
        rating: rating.value,
        cover: imageId,
        user: userID
      }
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  })
}