import { Component } from "react";
import Poster from "./Poster";
import Fave from "./Fave";

export default class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`);
  };
  render() {
    return (
      <div
        className="film-row"
        onClick={() => this.handleDetailsClick(this.props.movie.title)}
      >
        <Poster
          poster={this.props.movie.poster_path}
          title={this.props.movie.title}
        />

        <div className="film-summary">
          <h1>{this.props.movie.title}</h1>
          <p>{this.props.movie.release_date.substring(0, 4)}</p>
        </div>
        <Fave />
      </div>
    );
  }
}
