import React, {Component} from 'react'
import Poster from './Poster'
import Fave from './Fave'

class FilmRow extends Component {
    render() {
        const {film} = this.props
        const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`
        const year = new Date (film.release_date).getFullYear()

        return (
            <div classname="film-row">
                <Poster url={posterUrl} alt={`"${film.title}" was released on ${year}`} />
                <div className="film-summary">
                    <h1>{film.title}</h1>
                    <p>{year}</p>
                </div>
                <div>
                <Fave />
                </div>
            </div>
        )
    }
}

export default FilmRow