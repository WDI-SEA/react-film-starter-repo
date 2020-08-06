import React from 'react';
import FilmPoster from './FilmPoster'
import Fav from './Fav'

const FilmRow = (props) => {

    return (
        <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>
            <FilmPoster 
            src={`https://images.tmdb.org/t/p/w780${props.film.poster_path}`}
            alt={`Poster for the film ${props.film.title}`}
            />

            <div className="film-summary">
                <h2>{props.film.title}</h2>
                <p>{props.film.release_date.substring(0, 4)}</p>
            </div>
            <Fav onFaveToggle={() => props.onFaveToggle(props.film)} isFave={props.isFave}/>
        </div>
    );
}

export default FilmRow;