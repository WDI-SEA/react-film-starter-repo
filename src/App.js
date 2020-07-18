import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const App = () => {

  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = (film) => {
    console.log('fetching details for ' + film.title)
    setCurrent(film);
  }

  return (
    <div className="App">
      <div className="film-library">
        <FilmListing films={films} handleDetailsClick={handleDetailsClick}/>
        <FilmDetails film={current} />
      </div>
    </div>
  );

}

export default App;