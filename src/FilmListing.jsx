import React, { Component } from 'react';
import FilmRow from './FilmRow'

// handleFilterClick = (filter) => {
//     console.log(`Setting filter to ${filter}`)
// }

export default class FilmListing extends Component {

    handleFilterClick = (filter) => {
        console.log(`Setting filter to ${filter}`)
    }

    render() {
        const allFilms = this.props.filmInfo.map((film, key) => {
            return (
                <FilmRow film={film} key={`FilmRow-${key}`} />
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className="film-list-filter" onClick={() => this.handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.filmInfo.length}</span>
                    </div>
                    <div className="film-list-filter" onClick={() => this.handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        );
    }
}