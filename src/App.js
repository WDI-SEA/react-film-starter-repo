import React, { useState, useEffect } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.jsx';
import FilmListing from './FilmListing.jsx';
import TMDB from './TMDB';

const App = () => {

const films = TMDB.films
  // use the useState hook to set the initial films
  // an empty array 
  const [initFilms, setInitFilms] = useState(films)
  const [current, setCurrent] = useState({});

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${films.title}`)
    setCurrent(film)
  }

      return (
        <div className="App">
          <div className="film-library">
          <FilmListing films={initFilms} handleDetailsClick={handleDetailsClick}/>
            <FilmDetails film={current}/>
        </div>
      </div>
   );
}

export default App;