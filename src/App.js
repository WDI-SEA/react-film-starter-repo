import React, { useState } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

export default function App() {

  const [current, setCurrent] = useState({});

  let films = TMDB.films;
  //let current = {};

  const handleDetailsClick = film => {
    console.log(`fetching details for ${film}`)
    setCurrent(film);
  }

  return (
    <div className="App">
      <div className="film-library">
        <FilmListing films={ films } handleDetailsClick={ handleDetailsClick }/>
        <FilmDetails film={ current } />
      </div>
    </div>
  );
}
