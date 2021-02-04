import React, { Component } from 'react'
import TMDB from './TMDB'

class FilmRow extends Component {
    render() {
        return(
            <div className="film-row">
                <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} />
                <h1>{this.props.film.title}</h1>
            </div>
        )
    }
}

export default FilmRow