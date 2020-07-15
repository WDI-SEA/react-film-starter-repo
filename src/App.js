import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetail'
import FilmListings from './FilmListing'
import TMDB from './TMDB'
class App extends Component {
  render() {
    return (
        <div className="film-library">
            <FilmListings films={TMDB.films} />
            <FilmDetails films={TMDB.films} />
        </div>
    );
  }
}

export default App;