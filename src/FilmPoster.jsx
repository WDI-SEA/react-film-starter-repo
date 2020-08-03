import React from 'react';

const FilmPoster = (props) => {
        return (
            <div>
                <img src={props.poster_path} alt={`Film Poster ${props.title}`} />
            </div>
        );
    }

export default FilmPoster;