import { addBook, addAudiobook } from '../contentCreation/addBook'


const addItemFormPage = document.getElementById("addItemFormPage");
addItemFormPage.classList.add("add-form-page")
let queryString = new URLSearchParams(location.search);
let currentBookType = queryString.get("type");

export const drawAddFormPage = () => {
  // Draw form based on query param (book/audiobook)
  if(currentBookType === "book") {
    drawBookForm()
    return
  }
  if(currentBookType === "audiobook") {
    drawAudiobookForm();
    return
  }
}

const drawBookForm = () => {
  addItemFormPage.innerHTML = 
  `<h1 class="header-title">Add book</h1>
  <div class="input-group">
    <label for="bookTitle">Title</label>
    <input type="text" name="bookTitle" id="bookTitle">
  </div>
  <div class="input-group"> 
    <label for="author">Author</label>
    <input type="text" name="author" id="author">
  </div>
  <div class="input-group">
    <label for="pages">Pages</label>
    <input type="number" name="pages" id="pages">
  </div>
  <div class="input-group">
    <label for="genre">Genre</label>
    <div class="genre-tags-list">
      <div>
        <input type="checkbox" id="programming" value="Programming" />
        <label for="programming">Programming</label>
      </div>
      <div>
        <input type="checkbox" id="fiction" value="Fiction" />
        <label for="fiction">Fiction</label>
      </div>
    </div>
  </div>
  <div class="input-group">
    <label for="rating" max="5">Rating</label>
    <input type="number" name="rating" id="rating">
  </div>
  <div class="input-group">
    <label for="cover">Cover Image</label>
    <input type="file" name="cover" id="cover">
  </div>
  <button id="addBookBtn" class="button">Add</button>`

  // Event Listener
  document.getElementById("addBookBtn").addEventListener("click", () => {
    addBook();
  })
}

const drawAudiobookForm = () => {
  addItemFormPage.innerHTML =   
  `<h1 class="header-title">Add audiobook</h1>
  <div class="input-group">
    <label for="bookTitle">Title</label>
    <input type="text" name="bookTitle" id="bookTitle">
  </div>
  <div class="input-group">
    <label for="author">Author</label>
    <input type="text" name="author" id="author">
  </div>
  <div class="input-group">
    <label for="duration">Duration</label>
    <input type="number" name="duration" id="duration">
  </div>
  <div class="input-group">
    <label for="publicationDate">Publication Date</label>
    <input type="date" name="publicationDate" id="publicationDate">
  </div>
  <div class="input-group">
    <label for="genre">Genre</label>
    <div class="genre-tags-list">
      <div>
        <input type="checkbox" id="programming" value="1" />
        <label class="genre-tag" for="programming">Programming</label>
      </div>
      <div>
        <input type="checkbox" id="fiction" value="2" />
        <label class="genre-tag" for="fiction">Fiction</label>
      </div>
    </div>
  </div>
  <div class="input-group">
    <label for="rating">Rating</label>
    <input type="number" name="rating" id="rating" max="5">
  </div>
  <div class="input-group">
    <label for="cover">Cover Image</label>
    <input type="file" name="cover" id="cover">
  </div>
  <button id="addAudiobookBtn" class="button">Add</button>`

  // Event Listener
  document.getElementById("addAudiobookBtn").addEventListener("click", () => {
    addAudiobook();
  })
}

/*RATING
 <div class="wrapper">
<input type="checkbox" id="star1" value="1" />
<label for="star1"><i class="fa fa-star"></i></label>
<input type="checkbox" id="star2" value="2" />
<label for="star2"></label>
<input type="checkbox" id="star3" value="3" />
<label for="star3"></label>
<input type="checkbox" id="star4" value="4" />
<label for="star4"></label>
<input type="checkbox" id="star5" value="5" />
<label for="star5"></label>
</div> */