import React, { Component } from 'react';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';
import FilmRow from './FilmRow';
import Poster from './Poster';

class App extends Component {
  render() {
    return (
      <div className="film-library">       
        <FilmList films={TMDB.films}/>
        <Details films={TMDB.films}/> 
      </div>
    );
  }
}

export default App;