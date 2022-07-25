import React, { Component } from "react";
import Poster from './Poster';

class FilmRow extends Component {
    render() {
        const posterURL = `https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`
    return (
      <div className="film-row">
        <Poster url={posterURL} film={this.props.film}/>
        

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
