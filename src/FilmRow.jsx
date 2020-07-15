import React, { Component } from 'react';
import FilmPoster from './FilmPoster'

class FilmRow extends Component {
  render() {
    return (
      <div className="film-row">
        <FilmPoster poster_url={`https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`} title={this.props.film.title} />        
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;