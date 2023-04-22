import React from 'react';
import Poster from './Poster';
import Fave from './Fave';

const FilmRow = (props) => {
  const { film } = props;

  const handleDetailsClick = (film) => {
    console.log(`fetching details for ${film.title}`);
  };

  return (
    <div className="film-row" onClick={() => handleDetailsClick(props.film)}>
      <Poster url={film.poster_path} />

      <div className="film-summary">
        <Fave />
        <h1>{film.title}</h1>
        <p>{film.release_date.split('-')[0]}</p>
      </div>
    </div>
  );
};

export default FilmRow;
