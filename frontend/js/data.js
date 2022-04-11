const fetchData = async (url) => {
  const {data} = await axios.get(url)
  return data;
}

const getBooks = async () => {
  const {data: books} = await fetchData("http://localhost:1337/api/books?populate=*")
  return books;
}

const getAudiobooks = async () => {
  const {data: audiobooks} = await fetchData("http://localhost:1337/api/audiobooks?populate=*")

  return audiobooks;
}