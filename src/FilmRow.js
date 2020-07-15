import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log(`Fetching details for ${film.title} 🐈`)
    }

    render() {

        let year = this.props.film.release_date.split('-')

        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>

                <FilmPoster 
                    src={`https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`}
                    alt={this.props.film.title} 
                />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{year[0]}</p>
                </div>
                <Fave /> 
            </div>
        );
    }
}

export default FilmRow;