import { useState, useEffect } from 'react'
import React from 'react'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;

export default function App() {
  // States
  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})

  // Hooks
  useEffect(() => {
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(filmData => {
      console.log(filmData)
      setFilms(filmData.results)
    })
  }, [])

  // Necessary Variables
  // Handlers
  const handleDetailsClick = (film) => {
    setCurrent(film)
  }

  // Output
  return (
    <div className='film-library'>
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