const fetchData = async (url) => {
    const {data} = await axios.get(url)
    return data;
}

const printBooks = async () => {
    const books = await fetchData("http://localhost:1337/api/books")
    console.log(books.data)
}
printBooks();

const printAudiobooks = async () => {
    const audiobooks = await fetchData("http://localhost:1337/api/audiobooks")
    console.log(audiobooks.data)
}
printAudiobooks();