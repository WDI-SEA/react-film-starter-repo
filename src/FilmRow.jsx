import React from 'react';
import Fave from './Fave';
import Poster from './Poster';

export default function FilmRow(props) {
  const { film, onFaveToggle, isFave, handleDetailsClick } = props;
  const year = new Date(film.release_date).getFullYear();
  const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;

  const handleClick = (e) => {
    e.stopPropagation();
    onFaveToggle();
  };

  return (
    <div className="film-row" onClick={() => handleDetailsClick(film)}>
      <Poster url={posterUrl} title={film.title} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{year}</p>
      </div>

      <Fave
        isFave={isFave}
        onFaveToggle={() => onFaveToggle(film)}
        action={isFave ? 'remove_from_queue' : 'add_to_queue'}
      />
    </div>
  );
}

