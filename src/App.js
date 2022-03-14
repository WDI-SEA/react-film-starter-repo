import React, { useState } from "react";
import "./App.css";
import Details from "./Details.jsx";
import FilmList from "./FilmList.jsx";
import TMDB from "./TMDB.js";

export default function App(props) {
  const [current, setCurrent] = useState({});
  const [films, setFilms] = useState(TMDB.films);

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
    setCurrent(film);
  };
  return (
    <div className="film-library">
      <FilmList
        handleDetailsClick={handleDetailsClick}
        films={films}
        current={current}
      />

      <Details film={current} />
    </div>
  );
}
