// import React, { Component } from 'react'
import { useState } from 'react'
import './App.css'
import FilmList from './FilmList'
import Details from './Details'
import TMDB from './TMDB'

export default function App(props) {

  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

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