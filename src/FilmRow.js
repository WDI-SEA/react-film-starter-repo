import React from "react"
import Poster from './Poster'
import Fave from "./Fave"

export default function FilmRow(props) {
  // States
  // Necessary Variables
  const film = {
    title: props.film.title,
    year: props.film.release_date,
    poster_path: props.film.poster_path
  }

  // Handlers 
  
  // Output
  return (
    <div 
      key={props.key}
      className="film-row"
      onClick={() => props.handleDetailsClick(props.film)}
    >
      <Poster
        alt={film.title}
        poster={film.poster_path}
      />

      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{film.year.substring(0, 4)}</p>
      </div>

      <Fave 
        isFave={props.isFave}
        onFaveToggle={() => props.onFaveToggle(props.film)}
      />

    </div>
  )
}