import React, { useState } from 'react';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

const App = () => {

  const [films, setFilm] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = (film) => {
    setCurrent(film)
    console.log(`Fetching Details ${film.title}`)
  }

  return (
    <div className="film-library">
      <FilmListing films={films} handleDetailsClick={handleDetailsClick}/>
      <FilmDetails film={current} />
    </div>
  );
}

export default App;