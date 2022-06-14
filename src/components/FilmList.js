import { useState } from 'react'
import FilmRow from './FilmRow'

const FilmList = ({ films, handleDetailsClick }) => {
  const [filter, setFilter] = useState('all')
  const [faves, setFaves] = useState([])
  console.log(films)

  const handleFilterClick = newFilter => {
    console.log(newFilter)
    setFilter(newFilter)
  }

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

  const allFilms = films.map(film => {
    return (
      <FilmRow
        key={film.id}
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
          onClick={() => handleFilterClick('all')}
          className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
        >
          ALL
          <span className='section-count'>{films.length}</span>
        </div>
        <div
          onClick={() => handleFilterClick('faves')}
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

export default FilmList
