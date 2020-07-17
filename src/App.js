import React from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

export default function App() {
  return (
    <div className="App">
      <div className="film-library">
        <FilmListing films={ TMDB.films } />
        <FilmDetails films={ TMDB.films } />
      </div>
    </div>
  );
}
