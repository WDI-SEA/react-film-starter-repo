import { useState } from "react"
import FilmRow from "./FilmRow"

const FilmList = ({ movies, onDetailsClick }) => {
  const [filter, setFilter] = useState("all")
  const [faves, setFaves] = useState([])

  const handleFilterClick = (filter) => setFilter(filter)

  const handleFaveToggle = (film) => {
    let newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)

    if (filmIndex >= 0) {
      console.log(`Removing ${film.title} from faves`)
      // newFaves = newFaves.slice(0, filmIndex).concat(newFaves.slice(filmIndex + 1))
      newFaves.splice(filmIndex, 1)
    } else {
      console.log(`Adding ${film.title} to faves`)
      newFaves.push(film)
    }

    setFaves(newFaves)
  }

  // Array of films to FilmRow components
  const filmsToRows = (films) =>
    films.map((film) => (
      <FilmRow
        key={film.id}
        film={film}
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(film)}
        onDetailsClick={onDetailsClick}
      />
    ))

  const filmsToDisplay =
    filter === "all" ? filmsToRows(movies) : filmsToRows(faves)

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          onClick={() => handleFilterClick("all")}
          className={`film-list-filter ${filter === "all" ? "is-active" : ""}`}
        >
          ALL
          <span className="section-count">{movies.length}</span>
        </div>
        <div
          onClick={() => handleFilterClick("favs")}
          className={`film-list-filter ${filter !== "all" ? "is-active" : ""}`}
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
