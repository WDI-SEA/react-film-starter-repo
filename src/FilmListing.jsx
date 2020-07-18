import React, { useState } from 'react';
import FilmRow from './FilmRow'

const FilmListing = (props) => {

  const [faves, setFaves] = useState([])

  const [filter, setFilter] = useState('all')

  const handleFilterClick = (filter) => {
    setFilter(filter)
    console.log("Setting filter " + filter)
  } 

  const handleFaveToggle = (film) => {
    const filmIndex = faves.indexOf(film)
      if(filmIndex >= 0) {
        let newFaves = [...faves]
        newFaves.splice(filmIndex, 1)
        setFaves(newFaves)
        console.log("add fave")
      }
      else {
        setFaves([film, ...faves])
        console.log("remove fave")
      }
  }

  let filmsToDisplay = filter === 'all' ? props.films : faves;

  const allFilms = filmsToDisplay.map((film, i) => 
    <FilmRow 
    film={film} 
    key={`filmRow-${i}`} 
    onFaveToggle={handleFaveToggle} 
    isFave={faves.includes(film)} 
    handleDetailsClick={props.handleDetailsClick}/>
  )

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div 
        className={`film-list-filter ${filter === 'all'? 'is-active' : ''}`}
        onClick={() => handleFilterClick('all')}
        >
          AlL
          <span className="section-count">{props.films.length}</span>
        </div>
        <div 
        className={`film-list-filter ${filter === 'faves'? 'is-active' : ''}`}
        onClick={() => handleFilterClick('faves')}
        >
          FAVES
  <span className="section-count">{faves.length}</span>
        </div>
      </div>
      {allFilms}
    </div>
  );

}

export default FilmListing;