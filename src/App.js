import React, { Component } from "react";
import FilmList from "./Components/FilmList";
import Details from "./Components/Details";
import TMDB from './TMDB';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
        <FilmList films={TMDB.films}/>
        <Details films={TMDB.films}/>
        </div>
      </div>
    );
  }
}

export default App;
