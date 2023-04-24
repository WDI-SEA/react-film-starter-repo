import React, { useState } from 'react';
import FilmRow from './FilmRow';

export default function FilmList(props) {
  const [faves, setFaves] = useState([]);
  const [filter, setFilter] = useState('all');
  const { films, handleDetailsClick, setCurrent } = props;

  const handleFaveToggle = film => {
    let newFaves = [...faves];
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex < 0) {
      console.log(`ADDING ${film.title} TO FAVES`)
      newFaves = [...newFaves, film];
    } else {
      console.log(`REMOVING ${film.title} TO FAVES`)
      newFaves.splice(filmIndex, 1)
    }
    setFaves(newFaves)
  }

  const handleFilterClick = (filter) => {
    console.log(`Setting filter to ${filter}`)
    setFilter(filter)
  }

  const allFilms = props.films.map((film, i) => (
    <FilmRow 
      film={film} 
      key={`filmRow-${i}`} 
      onFaveToggle={handleFaveToggle}
      isFave={faves.includes(film)} 
      handleDetailsClick={handleDetailsClick}
    /> 
  ))

  const faveFilms = faves.map((film, i) => (
    <FilmRow 
      film={film} 
      key={`filmRow-${i}`} 
      onFaveToggle={handleFaveToggle}
      isFave={true}
      handleDetailsClick={handleDetailsClick}
    />
  ))

  const filmsToDisplay = (filter === 'all') ? allFilms : faveFilms;

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div 
          className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          ALL
        </div>
        <div 
          className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
          onClick={() => handleFilterClick('faves')}
        >
          FAVES
        </div>
      </div>
      {filmsToDisplay}
    </div>
  );
}
