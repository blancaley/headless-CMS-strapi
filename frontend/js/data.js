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

const getUserDataStrapi = async () => {
  const token = getToken();
  const response = await axios.get("http://localhost:1337/api/users/me?populate=*", {
    headers: {
      //Use token that you stored from previous request
      Authorization: `Bearer ${token}`,
    }
  })
  console.log(response)
}

getUserDataStrapi()