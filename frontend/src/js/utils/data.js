import axios from 'axios';
import { getToken } from './utilities'

export const fetchData = async (url) => {
  const {data} = await axios.get(url)
  return data;
}

export const getBooks = async () => {
  const {data: books} = await fetchData("http://localhost:1337/api/books?populate=*", {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return books;
}

export const getAudiobooks = async () => {
  const {data: audiobooks} = await fetchData("http://localhost:1337/api/audiobooks?populate=*", {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return audiobooks;
}