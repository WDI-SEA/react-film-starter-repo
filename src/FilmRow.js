import React, { Component } from "react";
import Poster from "./Poster.js";

class FilmRow extends Component {


  render() {
    const thisFilm = this.props.film;

    const thisTitle = thisFilm.title;
    const thisReleaseYear = thisFilm.release_date.split("-")[0];
    const posterUrl = "https://image.tmdb.org/t/p/w780/" + thisFilm.poster_path;

    return (
      <div className="film-row">
        <Poster
          url={posterUrl}
          alt={"Film poster for " + thisTitle}
        />

        <div className="film-summary">
          <h1>{thisTitle}</h1>
          <p>{thisReleaseYear}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;