import React, { useState } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const App = () => {

  const [film, setFilm] = useState(TMDB.films)
  const [current, setCurrent] =useState({})

  const handleDetailsClick = film => {
    console.log(`Fetching details for ${film.title} 🐈`)
    setCurrent(film);
}

  return (
      <div className="film-library">
        <FilmListing films={film} handleDetailsClick={handleDetailsClick} />
        <FilmDetails film={current} />
      </div>
  );
}

export default App;