import React from 'react';

function FilmPoster(props) {
  return (
    <img src={props.poster_path} 
        alt={`Poster of the film ${props.title}`} 
    />
  );
}

export default FilmPoster;