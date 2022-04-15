const addBook = async () => {
  const bookTitle = document.getElementById("bookTitle");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const rating = document.getElementById("rating");

  // Get the image and put it in a FormData
  const cover = document.getElementById("cover").files;
  const imgData = new FormData();
  imgData.append("files", cover[0]);

  // Upload image to Strapi
  axios.post("http://localhost:1337/api/upload", imgData, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`
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
        cover: imageId
      }
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }
    })
  })
}