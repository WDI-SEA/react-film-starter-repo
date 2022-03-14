import { Component } from "react";
import Poster from "./Poster";
import Fave from "./Fave";

export default function FilmRow(props) {
  return (
    <div
      className="film-row"
      onClick={() => props.handleDetailsClick(props.film)}
    >
      <Poster poster={props.film.poster_path} title={props.film.title} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{props.film.release_date.substring(0, 4)}</p>
      </div>
      <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
    </div>
  );
}
