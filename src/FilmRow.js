import React, { useState } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

const FilmRow = (props) => {
    const [isFave, setFave] = useState(false);
    return (
        <div 
            className="film-row"
            onClick={() => props.handleDetailsClick(props.film)}
        >
            <FilmPoster film={props.film} />
            <div className="film-summary">
                <h1>{props.film.title}</h1>
                <p>{props.film.release_date.slice(0,4)}</p>
            </div>
            <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} film={props.film}/>
        </div>
    );
}

export default FilmRow;