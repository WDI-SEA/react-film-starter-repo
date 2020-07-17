import React from 'react';

export default function FilmPoster(props) {
  return (
    <div>
      <img src={ props.poster.url } alt={ props.poster.alt } />
    </div>
  );
}

