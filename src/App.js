import React, { useState, useEffect } from 'react';
import TMDB from "./TMDB.js";
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';

const App = () => {    
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  const [theseFilms, setTheseFilms] = useState(TMDB.films);
  const [currentFilm, setCurrentFilm] = useState({});
  useEffect(() => {
    console.log("I love it when this component gets rendered from ", popularFilmsUrl);
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonDeets => {
      console.log("er, setWisdom? ", jsonDeets)
      setTheseFilms(jsonDeets.results);
    })
  }, [])
  const handleDetailsClick = (film) => {
    console.log("details requested for film", film);
    setCurrentFilm(film);
  }
    return (
      <div className="film-library">
        <FilmListing filmsData={theseFilms} handleDetailsClick={handleDetailsClick}/>
        <FilmDetails currentFilm={currentFilm}/>
      </div>
    );
}

export default App;