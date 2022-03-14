import React, { useState } from "react";
import FilmRow from "./FilmRow.jsx";

export default function Details(props) {
  const [faves, setFaves] = useState([]);
  const [filter, setFilter] = useState("all");
  const handleFaveToggle = (film) => {
    let newFaves = faves.slice();
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex < 0) {
      console.log(`adding ${film} to faves`);
      newFaves.push(film);
    } else {
      console.log(`removing ${film} from faves`);
      newFaves.splice(filmIndex, 1);
    }
    setFaves(newFaves);
  };
  const filmsToDisplay = filter === "all" ? props.films : faves;

  const allFilms = filmsToDisplay.map((film, index) => {
    return (
      <FilmRow
        key={`movie-id-${index}`}
        film={film}
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(film)}
        handleDetailsClick={props.handleDetailsClick}
      />
    );
  });
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${filter === "all" ? "is-active" : ""}`}
          onClick={() => setFilter("all")}
        >
          ALL
          <span className="section-count">{props.current.length}</span>
        </div>
        <div
          className={`film-list-filter ${
            filter === "faves" ? "is-active" : ""
          }`}
          onClick={() => setFilter("faves")}
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
      </div>
      {allFilms}
    </div>
  );
}
