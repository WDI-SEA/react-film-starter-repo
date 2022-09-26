import React, { Component } from 'react'
import FilmList from './FilmList'
import Details from './Details'
import './App.css'
import TMDB from './TMDB'

export default class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList films={TMDB.films} />

        <Details films={TMDB.films} />

      </div>
 
    )
  }
}