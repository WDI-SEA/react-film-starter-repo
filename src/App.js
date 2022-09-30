import { useState, useEffect } from 'react'
import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
    fetch(url)
      .then(response => response.json())
      .then(jsonData => setFilms(jsonData.results))
      .catch(console.warn)
  }, [])

  const handleDetailsClick = film => {
    console.log('fetching details for film:', film.title)
    setCurrent(film)
  }


  console.log('api key:', TMDB.api_key)

  return (
    <div className="film-library">
      <FilmList 
        films={films} 
        handleDetailsClick={handleDetailsClick}
      />

      <Details 
        films={TMDB.films} 
        film={current}
      />
    </div>
  )
}