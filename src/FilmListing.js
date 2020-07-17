import React, { useState } from 'react';
import FilmRow from './FilmRow';

export default function FilmListing(props) {

  const [filter, setFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setFilter(filter);
    console.log('clicked', filter)
  }

  const renderedFilms = props.films.map((film) =>{
    return (
      <FilmRow film={ film }/>
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
            <span className="section-count">0</span>
          </div>
      </div>
      
      {renderedFilms}
    </div>
  );
  
}
