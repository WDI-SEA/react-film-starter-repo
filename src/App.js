import React, { Component } from "react";
import "./App.css";
import Details from "./Details.jsx";
import FilmList from "./FilmList.jsx";
import TMDB from "./TMDB.js";

const movies = TMDB.films;

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList movieList={movies} />

        <Details movieList={movies} />
      </div>
    );
  }
}

export default App;
