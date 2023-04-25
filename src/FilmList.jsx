import React, { useState, useEffect } from 'react';
import FilmRow from './FilmRow';
import axios from 'axios';

export default function FilmList(props) {
  const [faves, setFaves] = useState([]);
  const [filter, setFilter] = useState('all');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    const filmUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    axios.get(filmUrl)
      .then(response => {
        setFilms(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleFaveToggle = film => {
    let newFaves = [...faves];
    const filmIndex = newFaves.indexOf(film);
    if (filmIndex === -1) {
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

  const allFilms = films.map((film, i) => (
    <FilmRow 
      film={film} 
      key={`filmRow-${i}`} 
      onFaveToggle={handleFaveToggle}
      isFave={faves.includes(film)} 
      handleDetailsClick={props.handleDetailsClick}
    /> 
  ))

  const faveFilms = faves.map((film, i) => (
    <FilmRow 
      film={film} 
      key={`filmRow-${i}`} 
      onFaveToggle={handleFaveToggle}
      isFave={true}
      handleDetailsClick={props.handleDetailsClick}
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
