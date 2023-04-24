import React from 'react'
import Fave from './Fave'

const FilmRow = props => {

  const handleDetailsClick = film => {
    console.log(`Fetching details for ${film.title}...`)
    props.handleDetailsClick(film)
  }

  return (
    <div className="film-row" onClick={() => handleDetailsClick(props.film)}>
      <img src={`https://image.tmdb.org/t/p/w92/${props.film.poster_path}`} alt={props.film.title} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{new Date(props.film.release_date).getFullYear()}</p>
      </div>

      <Fave 
        onFaveToggle={() => props.onFaveToggle(props.film)}
        isFave={props.isFave} 
      />
    </div>
  )
}

export default FilmRow
