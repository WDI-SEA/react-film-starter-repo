import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

export default class FilmRow extends Component {

  handleDetailsClick = (e, film) => {
    console.log('fetching details for')
  }

  render() {

    return (
      <div onClick={this.handleDetailsClick} className="film-row">
          <FilmPoster 
          poster_path={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} 
          />

        <div className="film-summary">
        <h1>{this.props.film.title}</h1>
        <p>{this.props.film.release_date.substr(0,4)}</p>
        </div>
        <Fave />

      </div>
    );
  }
}

