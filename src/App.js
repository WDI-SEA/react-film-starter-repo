import React, { useState } from 'react';
import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from './TMDB';

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})
  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setCurrent(film)
}
  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick}/>

      <Details film={current}/>  
    </div>
  )
}
