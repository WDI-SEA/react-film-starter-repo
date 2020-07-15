import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log(`Fecthing details for ${film.title}`);
  }

  render() {
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
        <FilmPoster
          src={`https://images.tmdb.org/t/p/w780${this.props.film.poster_path}`}
          alt={`Poster for the film ${this.props.film.title}`}
        />
        <div className="fil-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date.substring(0, 4)}</p>
        </div>
        <Fave />
      </div>
    );
  }
}

export default FilmRow;