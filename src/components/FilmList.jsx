import { useState } from "react"
import FilmRow from "./FilmRow"

const FilmList = ({ movies }) => {
  const [filter, setFilter] = useState("all")

  const handleFilterClick = (filter) => setFilter(filter)

  const allFilms = movies.map((film) => {
    return <FilmRow key={film.id} film={film} />
  })

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
          <span className="section-count">0</span>
        </div>
      </div>

      {allFilms}
    </div>
  )
}

export default FilmList
