import React, { useState } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const App = () => {

  const [film, setFilm] = useState(TMDB.films)
  const [current, setCurrent] =useState({})

  return (
      <div className="film-library">
        <FilmListing films={film} />
        <FilmDetails current={current} />
      </div>
  );
}

export default App;