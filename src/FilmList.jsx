import FilmRow from './FilmRow'
import { useState } from 'react'

export default function FilmList(props) {
  const [filter, setFilter] = useState('all')
  const [faves, setFaves] = useState([])

  const handleFilterClick = (filter) => {
    setFilter(filter)
  }

  const handleFaveToggle = (film) => {
    let newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)
    filmIndex === -1 ? newFaves.push(film) : newFaves.splice(filmIndex, 1)
    setFaves(newFaves)
  }

  const filmsToDisplay = filter=== "all" ? props.films : faves;

  const allFilms = filmsToDisplay.map((film, index) => {
    return (
      <FilmRow
        film={film}
        key={`film-${index}`}
        handleFaveToggle={handleFaveToggle}
        isFave={faves.includes(film)}
        handleDetailsClick={props.handleDetailsClick}
      />
    )
  })

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          ALL
          <span className="section-count">{props.films.length}</span>
        </div>
        <div
          className={`film-list-filter ${
            filter === 'faves' ? 'is-active' : ''
          }`}
          onClick={() => handleFilterClick('faves')}
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
      </div>

      {allFilms}
    </div>
  )
}
