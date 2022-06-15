import "./App.css"
import FilmList from "./components/FilmList"
import Details from "./components/Details"
import TMDB from "./TMDB"
import { useState, useEffect } from "react"

const App = () => {
  const [selectedFilm, setSelectedFilm] = useState({})
  const [films, setFilms] = useState(TMDB.films)

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`

  useEffect(() => {
    console.log("UseEffect is firing!")
    fetch(popularFilmsUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setFilms(jsonData.results)
      })
  }, [])

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setSelectedFilm(film)
  }

  return (
    <div className="film-library">
      <FilmList movies={films} onDetailsClick={handleDetailsClick} />
      <Details film={selectedFilm} />
    </div>
  )
}

export default App
