import React, { Component } from 'react';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import './index.css';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films}/>
        <FilmDetails films={TMDB.films}/>
      </div>
    );
  }
}

export default App;