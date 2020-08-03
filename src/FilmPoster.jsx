import React, { Component } from 'react';

const FilmPoster = (props) => {
        return (
            <img src={props.poster_path}
                alt={`Poster of the film ${props.title}`}
            />
        );
}

export default FilmPoster;