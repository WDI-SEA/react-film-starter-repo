import React from 'react';

const FilmPoster = (props) => {
    const altText = `Movie poster for ${props.film.title}`

    return (
        <img src={props.posterImg} alt={altText} />  
    );
}


export default FilmPoster;