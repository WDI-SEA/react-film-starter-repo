import React, { useState } from 'react';
import './App.css';
import FilmDetails from'./FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

const App = () => {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});
  
  const handleDetailsClick = (film) => {
    console.log(`Fecthing details for ${film.title}`
    );
    setCurrent(film)
}

    return (
        <div className="film-library">
          <FilmListing films={films} handleDetailsClick={handleDetailsClick}/>
          <FilmDetails film={current} />
        </div>
    )
  }
export default App;