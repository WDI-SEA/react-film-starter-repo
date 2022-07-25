import React, { Component} from "react"
import Poster from "./Poster"

class FilmRow extends Component {
    render() {
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`

        const date = new Date (this.props.film.release_date)
        const releaseDate = date.getFullYear()
        return (
            <div className="film-row">
                <Poster posterUrl={posterUrl} alt={this.props.title} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{releaseDate}</p>
                </div>
            </div>
        )

    }
}

export default FilmRow