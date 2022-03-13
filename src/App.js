import React, { useState } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';

function App() {
  const [films] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  const handleDetailsClick = (film) => {
    return ( 
      console.log(`Fetching Details for ${film.title}`),
      setCurrent(film)
    )
}

  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick}/>
      <Details film={current} />
    </div>
  );
}

export default App;