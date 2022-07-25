import React, { Component } from 'react';
import Details from './Details'
import FilmList from './FilmList'
// import FilmRow from './FilmRow'
import './App.css';
import TMDB from './TMDB';
// import Poster from './Poster'

class App extends Component {
  render() {
    return (
      <>
          <div className="film-library">
            <FilmList films={TMDB.films}/>
            <Details films={TMDB.films}/>
          </div>
            
      </>


    );
  }
}

export default App;