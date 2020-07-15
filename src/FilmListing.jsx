import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow'

class FilmListing extends Component {
    render() {
        const allFilms = this.props.films.map((film) => {
            return (
                <div className="film-row">
                <FilmRow film={film} />
              </div>
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