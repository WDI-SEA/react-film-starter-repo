import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

export default class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film.title}`)
    }
    render() {
        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
                <FilmPoster src={`https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`}
                            alt={`Poster for the film ${this.props.film.title}`}/>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.split("-", 1)}</p>
                </div>
                <Fave />
            </div>
        );
    }
}