import { useState } from "react";
import FilmRow from "./FilmRow";

export default function FilmList(props) {
  const [filter, setFilter] = useState("all");
  const [faves, setFaves] = useState([])

  const handleFilterClick = (filter) => {
    setFilter(filter);
  };

  const handleFaveToggle = (film) => {
    let newFaves = [...faves]
    let filmIndex = faves.indexOf(film)
    if (filmIndex >= 0) {
      console.log(`Removing ${film.title} from faves`)
      newFaves.splice(filmIndex, 1)
    } else {
      console.log(`Adding ${film.title} to faves`)
      newFaves.push(film)
    }
    setFaves(newFaves)
  }

  const filmsToDisplay = filter === "faves" ? faves : props.films;

  const allFilms = filmsToDisplay.map((film, i) => {
    return (
      <FilmRow
        film={film}
        posterUrl={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
        year={film.release_date}
        onFaveToggle={handleFaveToggle}
        handleDetailsClick={props.handleDetailsClick}
        isFave={faves.includes(film)}
        key={`film ${i}`}
      />
    );
  });

  return (
    <>
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${
              filter === "all" ? "is-active" : ""
            }`}
            onClick={() => handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              filter === "faves" ? "is-active" : ""
            }`}
            onClick={() => handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    </>
  );
}
