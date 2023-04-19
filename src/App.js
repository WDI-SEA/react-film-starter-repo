import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Details from "./Details";
import FilmList from "./FilmList";
import TMDB from "./TMDB";

class App extends Component {
  render() {
    const films = TMDB.films
    return (
      <div className="film-library">
        <FilmList
          films={films}
        />
        <Details
          films={films}
        />
      </div>
    )
  }
}

export default App
