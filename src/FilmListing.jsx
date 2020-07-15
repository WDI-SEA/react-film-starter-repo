import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListings extends Component {
    render() {
        
        const allFilms = this.props.films.map((film, i, img) => {
            return (
                <div className="film-row">
                    <FilmRow film={film} key={`FilmRow-${i}`} />
                </div>
                )
            });

        return (
            <div>
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    {allFilms}
                </div>
            </div>
        );
    }
}

export default FilmListings;