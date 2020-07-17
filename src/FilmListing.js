import React, { useState } from 'react';
import FilmRow from './FilmRow';

export default function FilmListing(props) {

  const [faves, setFaves] = useState([]);
  const [filter, setFilter] = useState('all');

  const filmsToDisplay = filter === "all" ? props.films : faves;

  const handleFilterClick = (filter) => {
    setFilter(filter);
    console.log('clicked filter', filter)
  }

  const handleFaveToggle = (film) => {
    let newFaves = [...faves];
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex < 0) {
      console.log(`ADDING ${film.title} TO FAVES`);
      newFaves = [...newFaves, film];
    } else {
      console.log(`REMOVING ${film.title} TO FAVES`);
      newFaves.splice(filmIndex, 1);
    }
    setFaves(newFaves);
  }

  const allFilms = filmsToDisplay.map((film, index) => { 
    return (
      <FilmRow  film={ film } 
                key={`filmRow-${index}`} 
                onFaveToggle= { handleFaveToggle }
                isFave={faves.includes(film)} 
                handleDetailsClick={ props.handleDetailsClick }/>
    )
   })

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
          <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => {
            handleFilterClick("all")
          }}>
            ALL
            <span className="section-count">{props.films.length}</span>
          </div>
          <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{
            handleFilterClick("faves")
          }}>
            FAVES
            <span className="section-count"> { faves.length } </span>
          </div>
      </div>
      
      { allFilms }
    </div>
  );
  
}
