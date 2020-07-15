import React, { Component } from 'react';

class FilmRow extends Component {
    render() {
        const film = this.props.film
            return (
                <div className="film-row">
                <img src= {`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt={film.title} />
                
                <div className="film-summary">
                    <h1>{film.title}</h1>
                    <p>{film.release_date}</p>
                </div>
                </div>
            )   
    }
}

export default FilmRow;