import React from 'react';
import TMDB from './TMDB';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = (props) => {


    let year = props.film.release_date.split('-')

    return (
        <div className="film-row" onClick={() => props.handleDetailsClick(props.film)}>

            <FilmPoster 
                src={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`}
                alt={props.film.title} 
            />

            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{year[0]}</p>
            </div>
            <Fave onFaveToggle={() => props.onFaveToggle(props.film)} isFave={props.isFave} /> 
        </div>
    );
}

export default FilmRow;