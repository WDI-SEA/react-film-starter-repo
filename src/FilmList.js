import React, { useState } from "react"
import FilmRow from "./FilmRow"

const FilmList = ({ films, current, onFaveToggle, onDetailsClick }) => {
  const [filter, setFilter] = useState("all")
  const [faves, setFaves] = useState([])

  const handleFaveToggle = (film) => {
    const newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)
    if (filmIndex === -1) {
      console.log(`Adding ${film.title} to faves...`)
      newFaves.push(film)
    } else {
      console.log(`Removing ${film.title} from faves...`)
      newFaves.splice(filmIndex, 1)
    }
    setFaves(newFaves)
  }

  const handleFilterClick = (filter) => {
    setFilter(filter)
  }

  const allFilms = films.map((film) => (
    <FilmRow
      key={film.id}
      film={film}
      isFave={faves.includes(film)}
      onFaveToggle={() => handleFaveToggle(film)}
      onDetailsClick={() => onDetailsClick(film)}
    />
  ))

  const faveFilms = faves.map((film) => (
    <FilmRow
      key={film.id}
      film={film}
      isFave={true}
      onFaveToggle={() => handleFaveToggle(film)}
      onDetailsClick={() => onDetailsClick(film)}
    />
  ))

  let filmsToDisplay = allFilms
  let filterActive = "all"
  if (filter === "faves") {
    filmsToDisplay = faveFilms
    filterActive = "faves"
  }

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${
            filterActive === "all" ? "is-active" : ""
          }`}
          onClick={() => handleFilterClick("all")}
        >
          ALL
          <span className="section-count">{films.length}</span>
        </div>
        <div
          className={`film-list-filter ${
            filterActive === "faves" ? "is-active" : ""
          }`}
          onClick={() => handleFilterClick("faves")}
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
      </div>
      {filmsToDisplay}
    </div>
  )
}

export default FilmList
