import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';
import React, { useState } from 'react'

export default function App() {
  // state - films
  const [films, setFilms] = useState({
    allFilms: TMDB.films
  })

  // state - current film
  const [currentFilm, setCurrent] = useState('')

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
    setCurrent(film)
  }

  return(
    <div className="film-library">
      <FilmList handleDetailsClick={handleDetailsClick} stateFilms={films} films={TMDB.films} />
      <Details currentFilm={currentFilm} films={TMDB.films} />
    </div>  
  )
}