import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListings extends Component {
    render() {
        let allFilms = this.props.films.map((film, i) => {
            return (
                <FilmRow film={film} key={`FilmRow-${i}`} />
            )
            });

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        );
    }
}

export default FilmListings;