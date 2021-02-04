import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'
class App extends Component {
  render() {
    return (
      <div className="film-library">
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <FilmListing films={TMDB.films} />
        </div>

        <div className="film-details">
              <h1 className="section-title">DETAILS</h1>
              <FilmDetails films={TMDB.films} />
        </div>
      </div>
    );
  }
}

export default App;