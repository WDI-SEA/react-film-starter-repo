import React, { useState,useEffect } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const App = () => {

  const [films, setFilms] = useState([])
  const [current, setCurrent] =useState({})
  //const popularFilmsUrl=`https://api.themoviedb.org/3/movie/550?api_key=${TMDB.api_key}&language=en-US&page=1`
  //console.log(popularFilmsUrl)

  useEffect(() => {
    //console.log("get that render")
    //console.log(TMDB.api_key)
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonDetails => {
      setFilms(jsonDetails.results)
    })
  }, [])

  

  const handleDetailsClick = film => {
    console.log(`Fetching details for ${film.title} 🐈`)
    setCurrent(film);
}

  return (
      <div className="film-library">
        <FilmListing films={films} handleDetailsClick={handleDetailsClick} />
        <FilmDetails film={current} />
      </div>
  );
}

export default App;