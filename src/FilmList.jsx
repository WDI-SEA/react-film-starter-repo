import React, { useState } from "react";
import FilmRow from "./FilmRow.jsx";

export default function Details(props) {
  const [faves, setFaves] = useState([]);
  const [filter, setFilter] = useState("all");
  const handleFaveToggle = (film) => {
    let newFaves = faves.slice();
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex >= 0) {
      console.log(`adding ${film.title} to faves`);
      newFaves.push(props.movieList[filmIndex]);
    } else {
      console.log(`removing ${film.title} from faves`);
      newFaves.splice(filmIndex, 1);
    }
    setFaves(newFaves);
  };
  const filmsToDisplay = filter === "all" ? props.films : faves;

  const allFilms = filmsToDisplay.map((movie, index) => {
    return (
      <FilmRow
        key={`movie-id-${index}`}
        movie={movie}
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(movie)}
        handleDetailsClick={props.handleDetailsClick}
      />
    );
  });
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${
            props.filter === "all" ? "is-active" : ""
          }`}
          onClick={() => props.handleFilterClick("all")}
        >
          ALL
          <span className="section-count">{props.current.length}</span>
        </div>
        <div
          className={`film-list-filter ${
            props.filter === "faves" ? "is-active" : ""
          }`}
          onClick={() => props.handleFilterClick("faves")}
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
      </div>
      {allFilms}
    </div>
  );
}
