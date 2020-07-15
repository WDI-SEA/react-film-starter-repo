import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
    render() {
        return (
            <div className="film-row">
                {/* introduce FilmPoster component */}
                <FilmPoster src={`https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`}/>
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.split("-")[0]}</p>
                </div>
            </div>
        );
    }
}

export default FilmRow;