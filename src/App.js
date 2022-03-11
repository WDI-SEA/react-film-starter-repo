import React, { Component } from 'react';
import './App.css';
import Details from './Details';
import FilmList from "./FilmList";
import TMDB from './TMDB'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="film-library">
     <FilmList films={TMDB.films}/>
     <Details films={TMDB.films}/>
     </div>
    </div>
    )
  }
}