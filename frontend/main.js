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

const printBooks = async () => {
    const books = await fetchData("http://localhost:1337/api/books")
    const booksList = document.getElementById("booksList");

    books.data.forEach(book => {
      const { attributes: { title, author, rating, pages} } = book;
      const bookItem = document.createElement("li");
      bookItem.innerHTML = `<h3>${title}</h3>
      <p>${author}</p>
      <p>${rating}</p>
      <p>${pages}</p>`

      booksList.append(bookItem)
    });
}
const printAudiobooks = async () => {
    const audiobooks = await fetchData("http://localhost:1337/api/audiobooks")
    console.log(audiobooks.data)
}

printBooks();
printAudiobooks();

// Event Listeners
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
})