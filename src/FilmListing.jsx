import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow'

class FilmListing extends Component {
    constructor() {
        super()
        this.state = {
            filter: 'all'
        }
    }
    handleFilterClick = (filter) => {
        console.log('setting filter to ' + filter)
        this.setState({filter})
    }
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
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                        ALL
            <span className="section-count">{this.props.films.length}</span>
                    </div
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves'.e.stopPropagation())}>
                        FAVES
            <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        );
    }
}

export default FilmListing;