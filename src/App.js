import React, { Component } from 'react';
import FilmList from "./FilmList"
import Details from "./Details"
import TMDB from "./TMDB"
import FilmRow from "./FilmRow";
import FilmPoster from "./FilmPoster";
import './App.css';

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