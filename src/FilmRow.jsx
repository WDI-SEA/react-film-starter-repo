import React from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = (props) => {

  const handleDetailsClick = (film) => {
    console.log(`fetching details for ${film.title}`)
  }
    return (
      <div onClick={() => handleDetailsClick(props.film)} className="film-row">
          <FilmPoster 
          poster_path={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} 
          />

        <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{props.film.release_date.substr(0,4)}</p>
        </div>
        <Fave />

      </div>
    );
 
}

export default FilmRow