import React from 'react';
import './App.css';
import Details from './components/Details';
import FilmList from './components/FilmList';
import TMDB from './TMDB'
import { useState } from 'react'

function App() {
  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState(TMDB.films)

  const handleDetailsClick = (film) => {
    console.log("Fetching details for", film.title)
  setCurrent(film)
}
  return (
    <div className="film-library">
      <FilmList 
      films={films}
      handleDetailsClick={handleDetailsClick} 
      />
      <Details 
      films={current} 
      />

    </div>
  );

}

export default App;