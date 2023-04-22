import React from 'react';

const Poster = (props) => {
  const url = props.url;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w780/${url}`} alt="" />
    </div>
  );
};

export default Poster;
