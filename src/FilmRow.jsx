import React from 'react';
import Poster from './Poster';
import Fave from './Fave';

const FilmRow = (props) => {
  const { film, isFave, onFaveToggle, handleDetailsClick } = props;

  return (
    <div className="film-row">
      <Poster url={film.poster_path} />

      <div className="film-summary" onClick={() => handleDetailsClick(film)}>
        <Fave isFave={isFave} onFaveToggle={onFaveToggle} />
        <h1>{film.title}</h1>
        <p>{film.release_date.split('-')[0]}</p>
      </div>
    </div>
  );
};

export default FilmRow;
