import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList';
// import FilmRow from './FilmRow';
import Details from './Details';
import TMDB from './TMDB';
// import Poster from './Poster';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmList films={TMDB.films} />
          <Details films={TMDB.films} />
        </div>
      </div>
    );
  }
}

export default App;