import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing filmInfo={TMDB.films} />
          <FilmDetails filmInfo={TMDB.films} />
        </div>
      </div>
    );
  }
}