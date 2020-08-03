import React, { Component, useState } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.jsx'
import FilmListing from './FilmListing'
import TMDB from './TMDB'

function App() {
//prt1
  const [films, setFilms]= useState(TMDB.films)
const [current, setCurrent]= useState({})

const handleDetailsClick = film => {
  console.log(`Fetching movie details for ${film.title}`)
setCurrent(film)
}

    return (
      <div className="film-library">
        <FilmListing films={TMDB.films} handleDetailsClick={handleDetailsClick}/>
        <FilmDetails current= {current} />
      </div>
    );
}

export default App;