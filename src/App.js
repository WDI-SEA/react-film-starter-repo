import "./App.css"
import FilmList from "./components/FilmList"
import Details from "./components/Details"
import movies from "./TMDB"
import { useState } from "react"

const App = () => {
  const [selectedFilm, setSelectedFilm] = useState({})
  const [films, setFilms] = useState(movies.films)

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
