const fetchData = async (url) => {
    const {data} = await axios.get(url)
    return data;
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
