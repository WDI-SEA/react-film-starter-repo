import React, {  } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = (props) => {

    return (
      <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
        <FilmPoster poster_path={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`} title={props.film.title} />        
        <div className="film-summary">
          <h1>{props.film.title}</h1>
          <p>{props.film.release_date}</p>
        </div>
        <Fave onFaveToggle={() => props.onFaveToggle(props.film)} isFave={props.isFave}/>
      </div>
    );
}

export default FilmRow;