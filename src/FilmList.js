import React, { Component } from 'react'
import './App.css'
import FilmRow from './FilmRow'

class FilmList extends Component {
    state ={
        filter: 'all'
    }
    handleFilterClick = (filter) => {
        console.log(`Setting filter to ${filter}`)
        this.setState({filter: filter})
    }
    handleDetailClick = (film) => {
        console.log(`Fetching details for ${film.title}`)
    }
    render() {
        const allFilms = this.props.films.map( (film, index) => ( // We use soft parentheses to indicate a return, instead of having to use curly braces plus the 'return' statement.
            <div onClick={() => this.handleDetailClick(film)} className="film-row">
                <h1><FilmRow film={film} key={`filmKey ${index}`} /></h1>
            </div>
        ))
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter == 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                </div>
                <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filter == 'faves' ? 'is-active' : ''}`} >
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>

        {allFilms}
        </div>
        )
    }
}

// films: [
//     {
//       "id": 346364,
//         "title": "It",
//         "poster_path": "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
//         "backdrop_path": "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
//         "overview": "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
//         "release_date": "2017-09-05"
//     },

export default FilmList