import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
    state = {
        filter: 'all'
    }

    handleFilterClick = (e, filter) => {
        this.setState({
            filter
        })
    }

    render() {
        const allFilms = this.props.films.map((film, i) => {
            return (
                <FilmRow film={film} key={`film${i}`}/>
            )
        })

        return (
            <div className='film-list'>
                <h1 className='section-title'>FILMS</h1>

                <div className='film-list-filters'>
                    <div
                        className={`film-list-filter${this.state.filter === 'all' ? ' is-active' : ''}`}
                        onClick={(e) => this.handleFilterClick(e, 'all')}
                    >
                        ALL
                        <span className='section-count'>{this.props.films.length}</span>
                    </div>

                    <div
                        className={`film-list-filter${this.state.filter === 'faves' ? ' is-active' : ''}`}
                        onClick={(e) => this.handleFilterClick(e, 'faves')}
                    >
                        FAVES
                        <span className='section-count'>0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        )
    }
}