import React, {  } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = (props) => {
    const handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film.title} 🌎`)
    }

    
    let posterUrl = `https://image.tmdb.org/t/p/w780${props.film.poster_path}`
    console.log(posterUrl);
    
    return (
        <div className="film-row" onClick={() => handleDetailsClick(props.film)}>
            <FilmPoster posterImg={posterUrl} film={props.film} />
            <div className="film-summary">
                <h1> {props.film.title}</h1>
                <p> {props.film.release_date.substring(0,4)} </p>
            </div>
            <div className="film-row-fave add_to_queue">
                <Fave onFaveToggle={() => props.onFaveToggle(props.film)}/>
            </div>
        </div>
    );
}

//If your function takes parameters: you have to put an anonymous function
// faves has no idea which film its in (onFaveToggle has no implicit passing through parameters)
// YOU MUST PUT IN ANONYMOUS FUNCTION IF YOU HAVE PARAMETERS 
// ONLY EXCEPTION IS e (event)... you don't have to put it in anon function,
// just put it in the eventHandler

export default FilmRow;