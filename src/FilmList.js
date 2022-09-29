import { useState } from 'react'
import React from 'react'
import FilmRow from './FilmRow'

export default function FilmList(props) {
  // States
  const [filter, setFilter] = useState('all')
  const [faves, setFaves] = useState([])

  // Necessary Variables
  const listType = filter === 'all' ? props.films : faves

  // Handlers
  const handleFilterClick = (filter) => {
    filter === 'all' ? setFilter('all') : setFilter('faves')
  }

  const handleFaveToggle = (film) => {
    let newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)

    filmIndex >= 0 ? newFaves.splice(filmIndex, 1) : newFaves = ([...newFaves, film])

    setFaves(newFaves)
  }
  
  // Output
  const filmsToDisplay = listType.map((film, i) => {
    return (
      <div key={`film_${i}`}>
        <FilmRow
          film={film}
          isFave={faves.includes(film)}
          onFaveToggle={handleFaveToggle}
          handleDetailsClick={props.handleDetailsClick}
        />
      </div>
    )
  })

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div 
          className={`film-list-filter
          ${filter === 'all' ? 'is-active' : ''}`}
          onClick={ () => handleFilterClick('all') }
        >
          ALL
          <span className="section-count">{props.films.length}</span>
        </div>
        <div
          className={`film-list-filter
          ${filter === 'faves' ? 'is-active' : ''}`}
          onClick={ () => handleFilterClick('faves') }
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
      </div>

      {filmsToDisplay}

    </div>
  )
}