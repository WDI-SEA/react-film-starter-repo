import React from 'react';

 const FilmPoster = (props) => {
  
  return (
    <div>
      <img src={props.poster_path} alt={`${props.title}'s poster`} />
    </div>
  );

}

export default FilmPoster