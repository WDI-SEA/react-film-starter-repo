// Instructions: https://github.com/WDI-SEA/react-omdb-instructions/blob/master/README.md
// Part 2: https://github.com/WDI-SEA/react-omdb-instructions/blob/master/part2.md

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

// Where is index.css being imported? And how come my poster images are small/how do I make them bigger? In-line styling didn't seem to work...

export default App