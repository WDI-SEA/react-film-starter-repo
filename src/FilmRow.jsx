import React, { Component } from 'react';
import Fave from "./Fave"
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log("Fetching details for D")
    }
    
    render() {
        const film = this.props.film
            return (
                <div className="film-row" onClick={() => this.handleDetailsClick(this.props.title)}>
                <FilmPoster 
                    src= {`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`}
                    alt= {`Poster for the film ${this.props.film.title}`}
                />
                
                <div className="film-summary">
                    <h1>{film.title}</h1>
                    <p>{film.release_date}</p>
                    <Fave />
                </div>
                </div>
            )   
    }
}

export default FilmRow;