import "./App.css";
import FilmList from "./components/FilmList";
import Details from "./components/Details";
import TMDB from "./TMDB";
import { useState, useEffect } from "react";

import React from "react";

const App = () => {
  const [currentFilm, setCurrent] = useState({});
  const [films, setFilms] = useState(TMBD.films);

  useEffect(() => {
    fetch(popularFilmsUrl)
      .then((response) => response.json())
      .then((jsonData) => {
        setFilms(jsonData.results);
      });
  }, []);

  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
  console.log(popularFilmsUrl);
  const handleDetailsClick = (film) => {
    setCFilm(film);
  };

  return (
    <div className="App">
      <div className="film-library">
        <FilmList onDetailsClick={handleDetailsClick} movies={films} />
        <Details film={currentFilm} />
      </div>
    </div>
  );
};

export default App;
