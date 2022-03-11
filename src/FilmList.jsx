import { Component } from "react";
import FilmRow from "./FilmRow.jsx";

export default class Details extends Component {
  state = {
    filter: "all",
  };
  handleFilterClick = (fil) => {
    this.setState({
      filter: fil,
    });
  };
  render() {
    const allFilms = this.props.movieList.map((movie, index) => {
      return <FilmRow key={`movie-id-${index}`} movie={movie} />;
    });
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${
              this.state.filter === "all" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.movieList.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}
