import React, { useState } from 'react';

const FilmPoster = (props) => {
    return (
        <img 
            src={`http://image.tmdb.org/t/p/w780/${props.film.poster_path}`} 
            alt={`image of poster for ${props.film.title}`} 
        />
    );
}

export default FilmPoster;