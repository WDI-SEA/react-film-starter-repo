import React from 'react';
import './App.css';
import Details from './components/Details';
import FilmList from './components/FilmList';
import TMDB from './TMDB'


function App() {

  return (
    <div className="film-library">
      <FilmList films={TMDB.films} />
      <Details films={TMDB.films} />

    </div>
  );

}

export default App;