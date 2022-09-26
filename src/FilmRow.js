import React, { Component } from "react";
import Poster from "./Poster";
import Fave from "./Fave";

class FilmRow extends Component {
    handleDetailsClick = film => {
        console.log(`info for ${film.title}`)
    }
    render() {
        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
                <Poster 
                    url={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} 
                    alt={`${this.props.film.title} poster`} 
                />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.split("-")[0]}</p>
                </div>
                <Fave />
            </div>
        );
    }
}

export default FilmRow;
