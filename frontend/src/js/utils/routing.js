import { drawAddFormPage } from '../printing/drawAddFormPage'

// Query strings routing – Show different sections
const sections = document.querySelectorAll("section");

const createURL = (key, value) => {
  const url = new URL(window.location.href);
  const search_params = url.searchParams;

  // Reset URL (remove type param) to go back to Add Item page from Form page
  if(key === "section" && search_params.has("type")) {
    search_params.delete("type");
  }

  // Lägger till parameter
  search_params.set(key, value);
  return url
}

// Uppdatera sida
export const changeActivePage = (key, value) => {
  // Skapar URL
  const url = createURL(key, value);
  // Uppdaterar sidan
  location.href = url;
}

const setActivePage = () => {
  let url = new URL(window.location.href);
  
  let search_params = url.searchParams;

  const currentSection = search_params?.get("section");
  const currentBookType = search_params?.get("type");

  if (!currentSection) return
  
  // Show section
  sections.forEach(section => {
    if (section.id === currentSection){
        section.hidden = false;
    } else {
      section.hidden = true;
    }
  })

  // Show form page section
  if(currentBookType) {
    document.getElementById("additem").hidden = true;
    document.getElementById("addItemFormPage").hidden = false;
    drawAddFormPage();
  }
}

setActivePage();

// Event Listener

const goToBookFormBtn = document.getElementById("goToBookFormBtn");
const goToAudioBookFormBtn = document.getElementById("goToAudioBookFormBtn");

goToBookFormBtn.addEventListener("click", () => {
  changeActivePage("type","book");
})

goToAudioBookFormBtn.addEventListener("click", () => {
  changeActivePage("type","audiobook");
})
