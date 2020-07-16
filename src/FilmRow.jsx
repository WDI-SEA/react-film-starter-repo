import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

const FilmRow = (props) => {
    const handleDetailsClick = (film) => {
        console.log('fetching details for ' + film.title)
    }
    
        return (
            <div className="film-row" onClick={() => handleDetailsClick(props.film)}>
                <FilmPoster poster_path={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`}
                    title={props.film.title}
                />
                <div className="film-summary">
                    <h1>{props.film.title}</h1>
                    <p>{props.film.release_date.substring(0, 4)}</p>
                </div>
                <Fave />
            </div>
        );
}

export default FilmRow;