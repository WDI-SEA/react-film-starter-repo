import React from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow ({
  film,
  onFaveToggle,
  isFave,
  handleDetailsClick
}) {
  let imagePath = `https://image.tmdb.org/t/p/w780/${film.poster_path}`
  return (
    <div
      className='film-row'
      onClick={() => {
        handleDetailsClick(film)
      }}
    >
      <Poster url={imagePath} alt={`movie poster for ${film.title}`} />
      <div className='film-summary'>
        <Fave
          onFaveToggle={() => {
            onFaveToggle(film)
          }}
          isFave={isFave}
        />
        <h1>{film.title}</h1>
        <p>{film.release_date.substring(0, 4)}</p>
      </div>
    </div>
  )
}
