import React, { useState } from 'react'
import FilmRow from './FilmRow'

export default function FilmList ({ films, handleDetailsClick }) {
  const [filter, setFilter] = useState('all')
  const [faves, setFaves] = useState([])

  const handleFaveToggle = film => {
    let newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)
    if (filmIndex < 0) {      
      newFaves = [...newFaves, film]
    } else {      
      newFaves.splice(filmIndex, 1)
    }
    setFaves(newFaves)
  }

  const filmsToDisplay = filter === 'all' ? films : faves 

  const allFilms = filmsToDisplay.map((film, index) => {
    return (
      <FilmRow
        key={`filmrow-${index}`}
        film={film}
        onFaveToggle={handleFaveToggle}
        isFave={faves.includes(film)}
        handleDetailsClick={handleDetailsClick}
      />
    )
  })
  return (
    <div className='film-list'>
      <h1 className='section-title'>FILMS</h1>
      <div className='film-list-filters'>
        <div
          name='all'
          onClick={() => setFilter('all')}
          className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
        >
          ALL
          <span className='section-count'>{films.length}</span>
        </div>

        <div
          name='faves'
          onClick={() => setFilter('faves')}
          className={`film-list-filter ${
            filter === 'faves' ? 'is-active' : ''
          }`}
        >
          FAVES
          <span className='section-count'>{faves.length}</span>
        </div>
      </div>

      {allFilms}
    </div>
  )
}
