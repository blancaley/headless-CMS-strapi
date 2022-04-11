// Query strings routing – Show different sections
const sections = document.querySelectorAll("section");

const createURL = (sectionName) => {
  const url = new URL(window.location.href);
  const search_params = url.searchParams;

  // Lägger till section parameter
  search_params.set('section', sectionName);

  return url
}

// Uppdatera sida
const changeActivePage = (sectionName) => {
  // Skapar URL
  const url = createURL(sectionName);
  // Uppdaterar sidan
  location.href = url;
}

const setActivePage = () => {
  let url = new URL(window.location.href);
  
  let search_params = url.searchParams;

  const currentSection = search_params?.get("section");

  if (!currentSection) return
  
  sections.forEach(section => {
    if (section.id === currentSection){
        section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  })
}

setActivePage();