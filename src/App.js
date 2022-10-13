import { useState } from 'react'
import React from 'react'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

export default function App() {
  // States
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

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