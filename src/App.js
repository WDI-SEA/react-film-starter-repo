import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function App() {
  // state - current film
  const [currentFilm, setCurrent] = useState('')

  // state - films
  const [films, setFilms] = useState([])

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;

  // fetch .then
  // useEffect(() => {
  //   fetch(popularFilmsUrl)
  //   .then(response => response.json())
  //   .then(jsonData => {
  //     // const movieArr = Object.values(jsonData.data)
  //     // console.log(jsonData.results)
  //     setFilms(jsonData.results)
  //   })
  // }, [])

  // fetch async/await
  useEffect(()=> {
    (async ()=> {
      const response = await fetch(popularFilmsUrl)
      const json = await response.json()
      setFilms(json.results)
    })()
  }, [])

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
    setCurrent(film)
  }

  return(
    <div className="film-library">
      <FilmList handleDetailsClick={handleDetailsClick} films={films} />
      <Details currentFilm={currentFilm} films={films} />
    </div>  
  )
}