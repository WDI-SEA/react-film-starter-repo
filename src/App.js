// import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'
require('dotenv').config()


export default function App(props) {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    // console.log(API_KEY)

  const [films, setFilms] = useState([])
  const [current, setCurrent] = useState({})
  // films (list of files) -- current is details right side.. start empty

  const handleDetailsClick = film => {
    setCurrent(film)
  }
  
  
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilms(jsonData.results)
    })
  }, [])

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