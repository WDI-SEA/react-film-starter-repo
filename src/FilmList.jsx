import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {

    state = {
        filter: 'all'
    }

    handleFilterClick = (filterType) => {

        this.setState({
            filter: filterType
        }, () => { console.log(this.state.filter) })



    }

    render() {
        const allFilms = this.props.films.map((film, idx) => {
            return <FilmRow key={idx} films={film} />
        })

        return (
            <>
                <div className="film-library">
                    <div className="film-list">
                        <h1 className="section-title">FILMS</h1>
                        <div className="film-list-filters">
                            <div className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""
                                }`} onClick={() => { this.handleFilterClick('all') }} name='allMovies'>
                                ALL
                                <span className="section-count">{this.props.films.length}</span>
                            </div>
                            <div className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""
                                }`} onClick={() => { this.handleFilterClick('faves') }} name='faveMovies'>
                                FAVES
                                <span className="section-count">0</span>
                            </div>
                        </div>

                        {allFilms}
                    </div>
                </div>
            </>
        )
    }
}

export default FilmList;