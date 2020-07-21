import React from 'react';

const FilmPoster = (props) => {
    return (
    <img src={props.posterPath}
    alt={props.film}></img>
    );  
}

export default FilmPoster;