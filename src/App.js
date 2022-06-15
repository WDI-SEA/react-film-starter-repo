import axios from "axios"
import React, { useState } from "react"
import "./App.css"
import Details from "./components/Details"
import FilmList from "./components/FilmList"
import TMDB from "./TMDB"

const url = `https://api.themoviedb.org/3/movie/550?api_key=${TMDB.api_key}`
const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = (film) => {
    console.log(`Fetching movie details for ${film.title}`)
    setCurrent(film)
  }

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
    const response = await axios.get(popularFilmsUrl)
    setFilms(response.data.results)
      
  }, [])
  
  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick} />
      <Details film={current} />
    </div>
  )
}

export default App
