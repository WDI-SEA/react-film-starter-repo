import React, { Component } from "react";
import Poster from "./Poster";
import Fave from "./Fave"

export default class FilmRow extends Component {
    render() {
        const {film} = this.props
        const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`
        const year = new Date (film.release_date).getFullYear()
        return(
            <div className="film-row">
                <Poster 
                    film = {film}
                />

                <div className="film-summary">
                    <h1>{film.title}</h1>
                    <p>{year}</p>
                </div>
                <Fave />
            </div>
        )
    }
}