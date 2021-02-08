import React, { Component } from "react"
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log(`fetching details for ${film}`)
    }
    render() {
        let poster = `https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`
        return(
            <div onClick={() => this.handleDetailsClick(this.props.film.title)} className="film-row">
            <FilmPoster poster = {poster} alt={this.props.film.title} />

            <div className="film-summary">
                <h1>{this.props.film.title}</h1>
                <p>{this.props.film.release_date}</p>
            </div>
            <Fave />
            </div>
        )
    }
}

export default FilmRow