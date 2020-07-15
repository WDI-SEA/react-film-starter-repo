import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRows extends Component {
  handleDetailsClick = film =>{
    console.log(`fetching details for ${film}`)
  }
  render() {
    let poster = {
      url: `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`,
      alt: this.props.film.title
    }
    return (
      <div  className="film-row"
            onClick={() => this.handleDetailsClick(this.props.film.title)}
      >
        <FilmPoster poster= { poster } />
        <div className="film-summary">
          <h1>{ this.props.film.title }</h1>
          <p>{ this.props.film.release_date }</p>
          <Fave />
        </div>
    </div>
    );
  }
}

export default FilmRows;