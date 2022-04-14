// Query strings routing – Show different sections
const sections = document.querySelectorAll("section");

const createURL = (key, value) => {
  const url = new URL(window.location.href);
  const search_params = url.searchParams;

  // Lägger till parameter
  search_params.append(key, value);

  return url
}

// Uppdatera sida
const changeActivePage = (key, value) => {
  // Skapar URL
  const url = createURL(key, value);
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
        section.hidden = false;
    } else {
      section.hidden = true;
    }
  })
}

setActivePage();