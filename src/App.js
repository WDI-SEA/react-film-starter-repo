import React, { Component } from 'react';
import Details from './Details'
import FilmList from './FilmList'
import './App.css';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <>
      <div className="App">
          <div className="film-library">
            <FilmList films={TMDB.films}/>
            <Details films={TMDB.films}/>
          </div>
      </div>
      </>


    );
  }
}

export default App;