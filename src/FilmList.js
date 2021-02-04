import React, { Component } from 'react'
import './App.css'
import FilmRow from './FilmRow'

class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map( (film, index) => ( // We use soft parentheses to indicate a return, instead of having to use curly braces plus the 'return' statement.
            <div className="film-row">
                <h1><FilmRow film={film} key={`filmKey ${index}`} /></h1>
            </div>
        ))
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
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