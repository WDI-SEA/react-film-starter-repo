import { Component } from "react";
import Poster from "./Poster";
import Fave from "./Fave";

export default function FilmRow(props) {
  return (
    <div
      className="film-row"
      onClick={() => props.handleDetailsClick(props.movie)}
    >
      <Poster poster={props.movie.poster_path} title={props.movie.title} />

      <div className="film-summary">
        <h1>{props.movie.title}</h1>
        <p>{props.movie.release_date.substring(0, 4)}</p>
      </div>
      <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
    </div>
  );
}
