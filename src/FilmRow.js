import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default function FilmRows(props) {

  let poster = {
    url: `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`,
    alt: props.film.title
  }

  return (
    <div  className="film-row"
          onClick={ () => props.handleDetailsClick(props.film) }
    >
      <FilmPoster poster={ poster } />
      <div className="film-summary">
        <h1>{ props.film.title }</h1>
        <p>{ props.film.release_date }</p>
        <Fave onFaveToggle={ () => { props.onFaveToggle(props.film) } } 
              isFave={ props.isFave }/>
      </div>
  </div>
  );
   
}
