import React, { Component } from "react";
import Poster from "./Poster";
import Fave from "./Fave";

class FilmRow extends Component {

  handDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`)
  }

  render() {
    return (
      <div onClick={()=>{this.handDetailsClick(this.props.wholeFilms.title)}} className="film-row">
        <div>
          <Poster url={"https://image.tmdb.org/t/p/w780/" + this.props.wholeFilms.poster_path} />
        </div>
        <div className="film-summary">
          <h1>{this.props.wholeFilms.title}</h1>
          <p>
            {this.props.wholeFilms.release_date.split('-')[0]}
          </p>
        </div>
          <Fave />
      </div>
    );
  }
}

export default FilmRow;
