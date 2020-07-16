import React from 'react';

const FilmPoster = (props) => {
    return (
        <img src={props.poster_path} alt={`Poster for ${props.title}`} />
    );

}

export default FilmPoster;