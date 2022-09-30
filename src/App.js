import React, { useState, useEffect } from 'react';
import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from './TMDB';


export default function App() {
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc`
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonData => setFilms(jsonData.results))
      .catch(err =>console.warn(err))
  }, [])
  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
    setCurrent(film)
}
  return (
    <div className="film-library">
      <FilmList films={films} handleDetailsClick={handleDetailsClick}/>

      <Details film={current}/>  
    </div>
  )
}
