import "./App.css";
import FilmList from "./components/FilmList";
import Details from "./components/Details";
import TMDB from "./TMDB";
import { useState } from "react";

import React from "react";

const App = () => {
  return (
    <div className="App">
      <div className="film-library">
        <FilmList films={filmList} />
        <Details cFilm={currentFilm} />
      </div>
    </div>
  );
};

export default App;

const [filmList, listFilms] = useState({
  films: TMDB.films,
});
const [currentFilm, setCFilm] = useState({
  cFilm: "",
});
