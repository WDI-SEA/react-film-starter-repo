import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

const App = () => {

  const [films, setFilm] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  return (
    <div className="film-library">
      <FilmListing films={films} />
      <FilmDetails film={current} />
    </div>
  );
}

export default App;