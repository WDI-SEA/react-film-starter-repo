import { useEffect, useState } from "react"
import './App.css'
import Details from './Details'
import FilmList from './FilmList'
import TMDB from './TMDB'

function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})



  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setCurrent(film)
  }

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then((data) => {
        setFilms(data.results)
        console.log("Movie Data:", data.results)
      })

  }, [])

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