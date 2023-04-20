import React, { Component } from "react";
import Poster from "./Poster"
import Fave from "./Fave"

export default class FilmRow extends Component {

  handleDetailsClick = title => {
    console.log(`Fetching details for ${title}`)
  }
  render() {

    const filmYear = this.props.year.split('-')

    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.title)}>
        <Poster 
        url={this.props.posterUrl}
        alt={""}
        />

        <div className="film-summary">
          <h1>{this.props.title}</h1>
          <p>{filmYear[0]}</p>
        </div>
        <Fave />
      </div>
    );
  }
}
