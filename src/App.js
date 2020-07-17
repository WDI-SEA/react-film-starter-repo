import React, { useState } from 'react';
import TMDB from "./TMDB.js";
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';

const App = () => {    
  const [currentFilm, setCurrentFilm] = useState({});
  const handleDetailsClick = (film) => {
    console.log("details requested for film", film);
    setCurrentFilm(film);
  }
    return (
      <div className="film-library">
        <FilmListing filmsData={TMDB.films} handleDetailsClick={handleDetailsClick}/>
        <FilmDetails currentFilm={currentFilm}/>
      </div>
    );
}

export default App;