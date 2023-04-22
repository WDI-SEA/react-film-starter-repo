import React, { useState } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';

const App = () => {
    const [films] = useState(TMDB.films)
    const [current, setCurrant] = useState({})

    const handleDetailsClick = (film) => {
      console.log(`fetching details for ${film.title}`)
      setCurrant(film)
    }

  return (
    <div className="App">
      <div className="film-library">
        <FilmList films={TMDB.films} handleDetailsClick={handleDetailsClick} />
        <Details films={TMDB.films} />
      </div>
    </div>
  );
}

export default App;
