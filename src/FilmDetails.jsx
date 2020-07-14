import React, { Component } from 'react';
import TMDB from "./TMDB.js";

class FilmDetails extends Component {
    render() {
        return (
            <div className="film-details">
                <h1 className="section-title">DETAILS</h1>
                <h1>{TMDB.films[0].title}</h1>
            </div>
        );
    }
}

export default FilmDetails;