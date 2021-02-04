// Instructions: https://github.com/WDI-SEA/react-omdb-instructions/blob/master/README.md

import React, { Component } from 'react'
import './App.css'
import FilmList from './FilmList'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList films={TMDB.films}/>
        <FilmDetails films={TMDB.films}/>       
      </div>
    )
  }
}

export default App