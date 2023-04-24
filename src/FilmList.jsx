import React, { useState } from 'react';
import FilmRow from './FilmRow';

const FilmList = (props) => {
  const [filter, setFilter] = useState('all');
  const [faves, setFaves] = useState([]);

  const handleFilterClick = (filter) => {
    console.log('a filter was clicked: ' + filter);
    setFilter(filter);
  };

  const handleFaveToggle = (film) => {
    const faveCopy = [...faves];
    const filmIndex = faveCopy.indexOf(film);
    if (filmIndex === -1) {
      faveCopy.push(film);
      console.log(`Adding ${film.title} to faves...`);
    } else {
      faveCopy.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves...`);
    }
    setFaves(faveCopy);
  };

  const filmsToDisplay = filter === 'all' ? props.films : faves;

  const allFilms = filmsToDisplay.map((film, i) => {
    const isFave = faves.includes(film);
    return (
      <FilmRow
        key={`filmrow ${i}`}
        film={film}
        isFave={isFave}
        onFaveToggle={() => handleFaveToggle(film)}
        handleDetailsClick={props.handleDetailsClick}
      />
    );
  });

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${filter === 'all' ? 'is active' : ''
            }`}
          onClick={() => handleFilterClick('all')}
        >
          ALL
          <span className="section-count">{props.films.length}</span>
        </div>
        <div
          className={`film-list-filter ${filter === 'faves' ? 'is active' : ''
            }`}
          onClick={() => handleFilterClick('faves')}
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
      </div>
      {allFilms}
    </div>
  );
};

export default FilmList;
