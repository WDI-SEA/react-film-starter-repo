import React from 'react';
import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from "./TMDB"

const App = () => {
  return (
    <div className="film-library">
      <FilmList films={TMDB.films} />
      <Details films={TMDB.films} />
    </div>
  );
}

export default App;
