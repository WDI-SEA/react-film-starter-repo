import React, { useState } from 'react';
import './App.css';
import { TMDB } from './TMDB';
import Details from './Details';
import FilmList from './FilmList';

function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  const handleDetailsClick = (film) => {
    console.log(`fetching details for ${film.title}`);
    setCurrent(film);
  };

  return (
    <div className="App">
      <div className="film-library">
        <FilmList films={films} handleDetailsClick={handleDetailsClick} setCurrent={setCurrent} />
        {current && <Details film={current} />}
      </div>
    </div>
  );
}

export default App;
