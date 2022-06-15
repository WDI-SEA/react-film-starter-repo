import React from 'react';
import './App.css';
import Details from './components/Details';
import FilmList from './components/FilmList';
import TMDB from './TMDB'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [current, setCurrent] = useState({})
  const [films, setFilms] = useState(TMDB.films)
  // const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  // // console.log(popularFilmsUrl)
  // useEffect(() => {
  //   // IIFE immediately invoked function expression
  //   // the IIFE is to avoid putting async on the useEffect callback
  //   (async () => {
  //     try {
  //       const res = await axios.get(popularFilmsUrl)
  //       console.log(res)
  //       setFilms(res.data.results)
  //     } catch (err) {
  //       console.warn(err)
  //     }
  //   })()
  
  // }, [])
 
  const handleDetailsClick = (film) => {
    console.log("Fetching details for", film.title)
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmList
        films={films}
        handleDetailsClick={handleDetailsClick}
      />
      <Details
        film={current}
      />

    </div>
  );

}

export default App;