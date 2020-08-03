import React, { useState } from 'react';
import './App.css';
import FilmDetails from './FilmDetails'
import FilmList from './FilmList'
import TMDB from './TMDB'


const App = () => {
  let films = TMDB.films
  
  const [initFilms, setInitFilms] = useState(films)
  
  const [current, setCurrent] = useState({
  
  })
  
  const handleDetailsClick = (film) => {
    console.log(`fetching details for ${film.title}`)
    setCurrent(film)
  }
    return (
        <div className="film-library">
          <FilmList films={initFilms} details={handleDetailsClick}/>
          <FilmDetails film={current} />
        </div>
    );
  }


export default App;