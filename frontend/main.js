const LOCAL_HOST = "http://localhost:1337";
const loginBtn = document.getElementById("loginBtn");

const fetchData = async (url) => {
    const {data} = await axios.get(url)
    return data;
}

const login = async () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const {data} = await axios.post("http://localhost:1337/api/auth/local", {
    identifier: "Batman",
    password: "Batman123"
    // identifier: username.value,
    // password: password.value
  })

  const token = data.jwt;
  sessionStorage.setItem("token", token);

  //Reset inputs
  username.value="";
  password.value="";
}

const getBooks = async () => {
  const {data: books} = await fetchData("http://localhost:1337/api/books?populate=*")
  return books;
}

const getAudiobooks = async () => {
  const {data: audiobooks} = await fetchData("http://localhost:1337/api/audiobooks?populate=*")

  return audiobooks;
}

const printLibraryList = async () => {
  const books = await getBooks();
  const audiobooks = await getAudiobooks();

  books.forEach(book => {
    printBookCard(book);
  });

  audiobooks.forEach(audiobook => {
    printAudiobookCard(audiobook);
  });
}

const printBookCard = async (book) => {
  const { attributes: { title, author, rating, pages:pagesNum, cover: { data: { attributes: {url}}}}} = book;

  const libraryList = document.getElementById("libraryList");
  const bookItem = document.createElement("article");
  bookItem.innerHTML = 
    `<div id="bookOwner">
    <p>Batman</p>
    <p>batman@gotham.com</p>
    </div>
    <div id="bookDetails">
      <img id="bookCover" src="${LOCAL_HOST}${url}" alt="${title} book cover">
      <h2>${title}</h2>
      <p>By ${author}</p>
      <p>Book <span>(${pagesNum} pages)</span></p>
      <div><i class="fa fa-star"></i>${rating}/5</div>
      <span>Tech</span>
      <span>Programming</span>
    </div>`

  libraryList.append(bookItem)
}

// Event Listeners
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
})

printLibraryList()