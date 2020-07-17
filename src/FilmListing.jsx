import React, { useState } from 'react';
import FilmRow from './FilmRow'

const FilmListing = (props) => {
  const [filter, setFilter] = useState({filter: 'all'})
 
  // handleFilterClick = (filter) => {
  //   //filter is shortform for filter: filter because they are the same name
  //   this.setState({ filter })
  //   console.log('setting filter to ' + filter)
  // } 

    const allFilms = props.films.map((film, i) => {
      return (
       <FilmRow film={film} key={`filmRow-${i}`} />
      )  
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} 
          onClick={() => setFilter('all')}>
              ALL
              <span className="section-count">{props.films.length}</span>
          </div>
          <div onClick={() => setFilter('faves')} 
          className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}>
              FAVES
              <span className="section-count">0</span>
          </div>
        </div>
        {allFilms}

      </div>
    
    );
  
}

export default FilmListing