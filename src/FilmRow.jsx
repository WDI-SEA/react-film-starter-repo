// import React, { Component } from 'react';
import Fave from './Fave';
import Poster from './Poster';

const FilmRow = (props) => {


    const posterURL = 'https://image.tmdb.org/t/p/w780/' + [props.films.poster_path]
    const date = new Date(props.films.release_date)
    const year = date.getFullYear()
    return (
        <>
            <div className="film-row" onClick={() => props.handleDetailsClick(props.films)}>
                <Poster
                    alt={props.films.title}
                    url={posterURL}
                />

                <div className="film-summary">
                    <Fave
                        onFaveToggle={() => { props.handleFaveToggle(props.films) }}
                        isFave={props.isFaves} //isFave should be true or false, if the movies is in array, return true, otherwise false
                    />
                    <h1>{props.films.title}</h1>
                    <p>{year}</p>
                </div>
            </div>
        </>
    )
}

export default FilmRow;