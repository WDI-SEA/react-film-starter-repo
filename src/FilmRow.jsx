import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = (props) => {
    // declare the function that renders basically a show page
    const handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film}!`)
    }
    
    return (
        <div onClick={() => handleDetailsClick(props.film)} className="film-row">
            <FilmPoster posterPath={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`} title={props.film.title}
                alt={`Poster of the film ${props.film.title}`}/>
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date.substring(0, 4)}</p>
            </div>
            <Fave 
                onFaveToggle={() => {props.onFaveToggle(props.film)}}
                isFave={props.isFave}
                />
        </div>
    );
    
}

export default FilmRow;