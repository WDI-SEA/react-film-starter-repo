import React from 'react';

const FilmPoster = (props) => {
    return (
        <div>
            <img
            src={props.src}
            alt={props.alt}
                />
        </div>
    );
}

export default FilmPoster;