import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmDetails from './FilmDetail'
import FilmListings from './FilmListing'
import TMDB from './TMDB'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <FilmListings films={TMDB.films} />
            <FilmDetails films={TMDB.films} />
          </div>

          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;