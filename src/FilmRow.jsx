import React from 'react';
// import TMDB from './TMDB'
import Fave from './Fave'


function FilmRow (props) {

    const handleDetailsClick = (film) => {
        console.log('fetching details for',film)
    }



        return (
            <div className="film-row" onClick = {() => handleDetailsClick(props.film.title)}>
                <img src={`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} alt="" />

                <div className="film-summary">
                    <h1>{props.film.title} </h1>
                    <p>{props.film.release_date}</p>
                </div>
                <Fave  />
            </div>
        )
    
}

export default FilmRow;
