import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
    state = {
        filter: 'all'
    }
    handleFilterClick = (filter) => {
        this.setState({
            filter
        })
    }
    render() {
        const allFilms = this.props.movies.map((film) => {
            return (
                <FilmRow
                    key={film.id}
                    film={film}
                />
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div
                        onClick={() => this.handleFilterClick('all')}
                        className={`film-list-filter ${this.state.filter === "all" ? 'is-active' : ''}`}
                    >
                        ALL
                        <span className="section-count">{this.props.movies.length}</span>
                    </div>
                    <div
                        onClick={() => this.handleFilterClick('favs')}
                        className={`film-list-filter ${this.state.filter !== "all" ? 'is-active' : ''}`}
                    >
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        )
    }
}
