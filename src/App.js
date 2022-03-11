import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from './TMDB.js';

class App extends Component {
    state = {
      filmList: TMDB
    }
  render() {
    console.log(this.state.movieData)
    return (
      <div className="film-library">
        <FilmList films={TMDB.films}/>

        <Details films={TMDB.films}/>
      </div>
    );
  }
}

export default App;