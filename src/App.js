import React, { useState, useEffect } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import Details from './components/Details';
import TMDB from './TMDB'

export default function App() {
  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})


  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
      .then(response => response.json())
      .then(jsonDeets => {
        console.log(jsonDeets)
        setFilms(jsonDeets.results)
      })
  }, [])


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

