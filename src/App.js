import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  // console.log('api key:', TMDB.api_key)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`

        const response = await axios.get(popularFilmsUrl)
        console.log(response.data)
        setFilms(response.data.results)
      } catch (err) {
        console.warn(err)
      }
    }
    fetchMovies()
  }, [])

  const handleDetailsClick = film => {
    console.log('fetching details for film:', film.title)
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmList 
        films={films} 
        handleDetailsClick={handleDetailsClick}
      />

      <Details 
        film={current} 
      />
    </div>
  )
}