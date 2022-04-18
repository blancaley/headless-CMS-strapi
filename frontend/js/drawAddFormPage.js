const addItemFormPage = document.getElementById("addItemFormPage");
let queryString = new URLSearchParams(location.search);
let currentBookType = queryString.get("type");

const drawAddFormPage = () => {
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
  `<h1>Add book</h1>
  <div>
    <label for="bookTitle">Title</label>
    <input type="text" name="bookTitle" id="bookTitle">
  </div>
  <div>
    <label for="author">Author</label>
    <input type="text" name="author" id="author">
  </div>
  <div>
    <label for="pages">Pages</label>
    <input type="number" name="pages" id="pages">
  </div>
  <div>
    <label for="genre">Genre</label>
    <input type="checkbox" id="programming" value="Programming" />
    <label for="programming">Programming</label>
    <input type="checkbox" id="fiction" value="Fiction" />
    <label for="fiction">Fiction</label>
  </div>
  <div>
    <label for="rating">Rating</label>
    <input type="number" name="rating" id="rating">
  </div>
  <div>
    <label for="cover">Cover Image</label>
    <input type="file" name="cover" id="cover">
  </div>
  <button onclick=addBook()>Add</button>`
}

const drawAudiobookForm = () => {
  addItemFormPage.innerHTML =   
  `<h1>Add audiobook</h1>
  <div>
    <label for="bookTitle">Title</label>
    <input type="text" name="bookTitle" id="bookTitle">
  </div>
  <div>
    <label for="author">Author</label>
    <input type="text" name="author" id="author">
  </div>
  <div>
    <label for="duration">Duration</label>
    <input type="number" name="duration" id="duration">
  </div>
  <div>
    <label for="publicationDate">Publication Date</label>
    <input type="date" name="publicationDate" id="publicationDate">
  </div>
  <div>
    <label for="genre">Genre</label>
    <input type="checkbox" id="programming" value="1" />
    <label for="programming">Programming</label>
    <input type="checkbox" id="fiction" value="2" />
    <label for="fiction">Fiction</label>
  </div>
  <div>
    <label for="rating">Rating</label>
    <input type="number" name="rating" id="rating">
  </div>
  <div>
    <label for="cover">Cover Image</label>
    <input type="file" name="cover" id="cover">
  </div>
  <button onclick=addAudiobook()>Add</button>`
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