import React, { useState, useEffect } from 'react';
import './App.css';
import FilmList from './FilmList'
import FilmDetail from './FilmDetail'
import TMDB from './TMDB'

const App = () => {

  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  //step 2 & 3 from part4 instructions
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`)
      .then(response =>
        response.json())
          .then(data => {
            setFilms(data.results)
          })
  }, [])


  // task 3 from part3 instructions
  const handleDetailsClick = (film) => {
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick}/>
      <FilmDetail film={current} handleDetailsClick={handleDetailsClick}/>
    </div>
  );
}

export default App;