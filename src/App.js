import React from 'react';
import './App.css';
import Details from './components/Details';
import FilmList from './components/FilmList';
import TMDB from './TMDB'
import { useState } from 'react'

function App() {
  const [current] = useState({})
  const [films] = useState(TMDB.films)
  return (
    <div className="film-library">
      <FilmList 
      films={films} 
      />
      <Details 
      films={current} 
      />

    </div>
  );

}

export default App;