import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default class FilmRow extends Component {
    render() {
        console.log(this.props.film)
        const date = new Date(`${this.props.film.release_date}`)
        return (
            <div className="film-row">
                <Poster
                src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt={this.props.film.title}

                />
                    <div className="film-summary">
                        <h1>{this.props.film.title}</h1>
                        <p>{date.getFullYear()}</p>
                    </div>
                    <Fave />
                    </div>
        )
    }
}