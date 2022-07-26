import React, { Component } from "react";
import Poster from "./Poster.js";
import Fave from "./Fave.js";

class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log("Fetching details for", this.props.film.title);
  }

  render() {
    const thisFilm = this.props.film;

    const thisTitle = thisFilm.title;
    const thisReleaseYear = thisFilm.release_date.split("-")[0];
    const posterUrl = "https://image.tmdb.org/t/p/w780/" + thisFilm.poster_path;

    return (
      <div
        className="film-row"
        onClick={() => this.handleDetailsClick(thisFilm)}
      >
        <Poster
          url={posterUrl}
          alt={"Film poster for " + thisTitle}
        />

        <div className="film-summary">
          <h1>{thisTitle}</h1>
          <p>{thisReleaseYear}</p>
        </div>

        <Fave />
      </div>
    );
  }
}

export default FilmRow;