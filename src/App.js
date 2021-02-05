import React, { Component } from 'react';
import './App.css';
import FilmDetail from './FilmDetail';
import FilmListing from './FilmListing';
import TMDB from './TMDB'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="film-library">
          <FilmListing films={TMDB.films} />
          <FilmDetail films={TMDB.films} />
        </div>
      </div>
    )
  }
}

export default App;