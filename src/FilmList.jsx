import React, { useState } from 'react';
import FilmRow from './FilmRow';
import Fave from './Fave'


const FilmList = (props) => {
  const [filter, setFilter] = useState({ filter: 'all' })
  const [faves, setFaves] = useState([])

  const handleFaveToggle = (film) => {
    let newFaves = [...faves]
    const filmIndex = newFaves.indexOf(film)
    if (filmIndex > -1) {
      // it's in the fave array 
      newFaves = [...newFaves, film]
      // splice cuts the one instance of a varialbe
    } else {
      // it isn't in the fave array
      newFaves.splice(filmIndex, 1)
    }
    setFaves(newFaves)
  }

  const filmsToDisplay = filter === 'all' ? props.films : faves

  const allFilms = filmsToDisplay.map((film, i) =>
    <FilmRow film={film}
      key={`filmRow-${i}`}
      onFaveToggle={handleFaveToggle}
      isFaved={faves.includes(film)}
      details={props.details} />)

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => setFilter('all')}>
          ALL
            <span className="section-count">{props.films.length}</span>
        </div>
        <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => setFilter('faves')}>
          FAVES
            <span className="section-count">{faves.length}</span>
        </div>
      </div>
      {allFilms}
    </div>
  );
}

export default FilmList;