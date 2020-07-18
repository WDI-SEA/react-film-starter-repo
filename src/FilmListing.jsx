import React, { useState } from 'react';
import FilmRow from './FilmRow.jsx';


const FilmListing = (props) => {
  const [filter, setFilter] = useState('all');
  const [faves, setFaves] = useState([]);

  const handleFilterClick = (filter) => {
    setFilter( filter );
    console.log('Setting filter to ' + filter);
  }

  const handleFaveToggle = (film) => {
    let filmIndex = faves.indexOf(film)
    if (filmIndex >= 0) {
      let newFaves = [...faves]
      console.log('removing from favorites array')
      newFaves.splice(filmIndex, 1)
      setFaves(newFaves)
    } else {
      setFaves([...faves, film])
      console.log('adding to faves')
      console.log(faves)
    }
  }
  // //alternative to above
  // const onFaveToggle = (film) => {
  //   // make a copy of faves
  //   let newFaves = [...faves]
  //   let faveIndex = faves.indexOf(film)
  //   // check if a film is in the faves
  //   if (faveIndex >= 0) {
  //     // If film is in faves array, take it out
  //     newFaves.slice(faveIndex, 1)
  //   } else {
  //     // else put in the array
  //     newFaves = [...newFaves, film]
  //   }
  //   // set faves equal to our new mutated array
  //   setFaves(newFaves)
  // }

  // set relevent array(filmsToDisplay)
  let filmsToDisplay = filter === 'all' ? props.films : faves;

  const allFilms = filmsToDisplay.map((film, i) => {
    return <FilmRow film={film} key={`filmRow-${i}`} onFaveToggle={handleFaveToggle} isFave={faves.includes(film)} handleDetailsClick={props.handleDetailsClick}/>
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
              <span className="section-count">{faves.length}</span>
            </div>
          </div>
          {allFilms}
      </div>
    );
  }

export default FilmListing;