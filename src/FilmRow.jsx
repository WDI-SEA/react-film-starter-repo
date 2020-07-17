import React from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = (props) => {

  const handleDetailsClick = (film) => {
    console.log(`Fecthing details for ${film.title}`);
  }

    return (
      <div className="film-row" onClick={() => handleDetailsClick(props.film)}>
        <FilmPoster
          src={`https://images.tmdb.org/t/p/w780${props.film.poster_path}`}
          alt={`Poster for the film ${props.film.title}`}
        />

        <div className="fil-summary">
          <h1>{props.film.title}</h1>
          <p>{props.film.release_date.substring(0, 4)}</p>
        </div>
        <Fave onFaveToggle={() => props.onFaveToggle(props.film)}/>
      </div>
    );
  }

export default FilmRow;