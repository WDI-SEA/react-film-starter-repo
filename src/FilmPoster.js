import React from 'react';

const FilmPoster = (props) => {
    return ( 
        <img src={props.src} alt={props.alt} />   
    );
}

export default FilmPoster;