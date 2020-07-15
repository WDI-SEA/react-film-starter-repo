import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film}`)
    }

    render() {
        return (
            <div>
                <div className="film-row" onClick={() => {this.handleDetailsClick(this.props.film.title)}}>
                    <FilmPoster poster_path={`https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`} alt_text={`poster of movie ${this.props.film.title}`} />

                <div className="film-summary">
                    <Fave />
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.split('-', 1)}</p>
                </div>
                </div>
            </div>
        );
    }
}

export default FilmRow;