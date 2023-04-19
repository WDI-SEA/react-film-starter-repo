import React, { Component } from "react"
import Poster from "./Poster"
import Fave from "./Fave"

export default class FilmRow extends Component {
    render() {
        return (
            <div className="film-row">
                <Poster film={this.props.film} />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.split('-')[0]}</p>
                </div>

                <Fave />
            </div>
        )
    }
}