import React, { Component } from 'react';
import TMDB from "./TMDB.js";
import FilmRow from "./FilmRow.jsx";

class FilmListing extends Component {
    render() {
        const allFilms = TMDB.films.map((film, i) => {
            return (
                <FilmRow film={film} key={`filmRow-${i}`}/>
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        );
    }
}

export default FilmListing;