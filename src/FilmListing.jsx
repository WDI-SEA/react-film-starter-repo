import React, { useState } from 'react';
import FilmRow from './FilmRow.jsx';


const FilmListing = (props) => {

  const [faves, setFaves] = useState([]);

  const [filter, setFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setFilter( filter );
    console.log('Setting filter to ' + filter);
  }
  const handleFaveToggle = (film) => {
    /// make a new array and populate it with everything from faves, willl take each item from faves and 
    // push it into newFaves as an item (exact copy)
    const filmIndex = faves.indexOf(film);
    if (filmIndex >= 0 ) {
      let newFaves = [...faves];
      newFaves.splice(filmIndex, 1);
      setFaves(newFaves);
    } else {
      setFaves([film, ...faves])
    }
  }

    const allFilms = props.films.map((film, i) => {
    return <FilmRow 
            film={film}   
            key={`filmRow-${i}`} 
            onFaveToggle={handleFaveToggle} />
    });

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
              <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} 
              onClick={() => handleFilterClick('all')}
              >
                ALL
                <span className="section-count">{props.films.length}</span>
              </div>
              <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} 
              onClick={() => handleFilterClick('faves')}>
                FAVES
                <span className="section-count">0</span>
              </div>
            </div>
            {allFilms}
        </div>
    );
  }

export default FilmListing;