import { useState } from "react"
import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState([])

  const handleDetailsClick = (film) => {
    console.log("Fetching details for")
    setCurrent(film)
}

    return (
      <div className="film-library">
        <FilmList 
        films = {films}
        setFilms={setFilms}
        handleDetailsClick={handleDetailsClick}
        />

        <Details 
        films = {films}
        currentFilm={current}
        setCurrent={setCurrent}
        handleDetailsClick={handleDetailsClick}
        />
      </div>
    )
  }


export default App