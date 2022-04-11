const LOCAL_HOST = "http://localhost:1337";
const libraryList = document.getElementById("libraryList");

const printLibraryList = async () => {
  const books = await getBooks();
  const audiobooks = await getAudiobooks();

  books.forEach(book => {
    printBookCard(book);
  });

  // audiobooks.forEach(audiobook => {
  //   printAudiobookCard(audiobook);
  // });
}

const printBookCard = async (book) => {
  const { attributes: { title, author, rating, pages:pagesNum, cover: { data: { attributes: {url}}}}} = book;

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

const printHomePage = () => {
  if (libraryList.hidden) return;
  printLibraryList();
}

printHomePage();