import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = (props) => {
  
    return (
      <div className="film-row" onClick={() => props.details(props.film)}>
        <FilmPoster 
          poster_path={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`}
          alt={`Poster for the film ${props.film.title}`}
          title={props.film.title}
        />

        <div className="film-summary">
          <h1>{props.film.title}</h1>
          <p>{props.film.release_date.substr(0,4)}</p>
        </div>
        <Fave onFaveToggle={() => {props.onFaveToggle(props.film)}} isFaved={props.isFaved}/>
      </div>
    );
  }


export default FilmRow;