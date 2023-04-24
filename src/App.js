import React, { useState } from 'react';
import FilmList from './FilmList';
import TMDB from './TMDB';
import Details from './Details';

function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
    setCurrent(film);
  };

  const handleFaveToggle = (film) => {
    const newFaves = [...faves];
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex === -1) {
      console.log(`Adding ${film.title} to faves...`);
      newFaves.push(film);
    } else {
      console.log(`Removing ${film.title} from faves...`);
      newFaves.splice(filmIndex, 1);
    }
    setFaves(newFaves);
  };

  const [faves, setFaves] = useState([]);

  return (
    <div className="film-library">
      <FilmList films={films} faves={faves} onFaveToggle={handleFaveToggle} onDetailsClick={handleDetailsClick} />
      <Details film={current} />
    </div>
  );
}

export default App;
