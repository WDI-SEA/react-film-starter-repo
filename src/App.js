import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Details from './Details';
import FilmList from './FilmList';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        {/* <div className="film-list">
          <h1 className="section-title">FILMS</h1>
        </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
      </div> */}
      {/* <Details />
      <FilmList /> */}
      <FilmList films={TMDB.films} />
      <Details films={TMDB.films} />
  </div>
    );
  }
}

export default App;