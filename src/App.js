import React, { useState } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import Details from './components/Details';
import TMDB from './TMDB'

export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  //handlers
  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <FilmList
          films={films}
          handleDetailsClick={handleDetailsClick}
        />
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <Details film={current} />
      </div>
    </div>
  );
}

