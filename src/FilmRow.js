import React, { Component } from 'react';

class FilmRow extends Component {
    render() {
        const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster}`
        const fullyear = this.props.year.split("-", 1)
        return (
        <div className="film-row">
          <h1>{this.props.film}</h1>
          <img src={posterUrl} alt="movie-poster" />
          <div className="film-summary">
            <p>{fullyear}</p>
          </div>
        </div>
        );
    }
}

export default FilmRow;