// import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
require('dotenv').config()


export default function App(props) {

  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})
  // films (list of files) -- current is details right side.. start empty

  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => setFilms(jsonData.results))
    }, [])

  const handleDetailsClick = film => {
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
  )
  
}